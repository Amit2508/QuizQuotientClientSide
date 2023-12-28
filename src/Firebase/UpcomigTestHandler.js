import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export async function GetUpcomingTestHandler() {
  try {
    const TestColectionRef = collection(db, "Tests");
    const TestCollectionSnapShot = await getDocs(TestColectionRef);
    const UpcomingTestsHolder = [];

    TestCollectionSnapShot.forEach((doc) => {
      const data = doc.data();
      const currentDate = new Date();
      const formatData = JSON.parse(JSON.parse(data.TestDetails));
      const testDate = new Date(formatData.date);
      const endTimeArray = formatData.ed.split(":");
      const testEndTime = new Date(
        testDate.getFullYear(),
        testDate.getMonth(),
        testDate.getDate(),
        parseInt(endTimeArray[0]),
        parseInt(endTimeArray[1]),
        parseInt(endTimeArray[2])
      );
      if (currentDate <= testEndTime) {
        UpcomingTestsHolder.push({
          tests: doc.id,
          TestDetails: data.TestDetails,
          date: formatData.date,
        });
      }
    });

    const UpcomingTestSorter = [];

    for (let i = 0; i < UpcomingTestsHolder.length; i++) {
      const data = UpcomingTestsHolder[i];
      const test = data.tests;
      const bool = await Get_Given_Test(test);
      if (bool === false) {
        UpcomingTestSorter.push(data);
      }
    }

    UpcomingTestSorter.sort((a, b) => b.date - a.date);
    const latestTests = UpcomingTestSorter.slice(0, 2);

    return latestTests;
  } catch (error) {
    alert("Please retry again");
    console.error("These are the error - ", error);
  }
}

function formatDate(data) {
  const formatDate = new Date(data);
  return formatDate.toLocaleString();
}

async function Get_Given_Test(doc_id) {
  const get_Cookies = Cookies.get("ACCESS_TOKEN");
  let email = "";
  let set = "";

  if (get_Cookies.substring(0, 1) === "{") {
    const token = JSON.parse(get_Cookies);
    email = token.email;
    set = "EmailUser";
  } else {
    const data = jwtDecode(get_Cookies);
    email = data.email;
    set = "GoogleUser";
  }

  // Assuming collection returns a QueryReference
  const UserTestCollectionRef = collection(db, set, email, "TestsGiven");

  try {
    const UserCollectionDocument = doc(UserTestCollectionRef, doc_id);
    const UserCollectionSnapShot = await getDoc(UserCollectionDocument);

    if (UserCollectionSnapShot.exists()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function Check_Result_test(test_id) {
  let email = "";
  let collection1 = "";
  const token = Cookies.get("ACCESS_TOKEN");
  if (token.substring(0, 1) === "{") {
    const parse_tokem = JSON.parse(token);
    email = parse_tokem.email;
    collection1 = "EmailUser";
  } else {
    const parse_token = jwtDecode(token);
    email = parse_token.email;
    collection1 = "GoogleUser";
  }
  const TestCollectionRef = collection(db, collection1, email, "TestsGiven");
  const TestCollectionDocument = doc(TestCollectionRef, test_id);
  try {
    const ResutCollectionSnapShot = await getDoc(TestCollectionDocument);
    const store_data = [];
    if (ResutCollectionSnapShot.exists()) {
      const data = ResutCollectionSnapShot.data();
      store_data.push(data.marks);
      store_data.push(data.rank);
    }
    return store_data;
  } catch (error) {
    console.error("this is the error - ", error);
    alert("Error Getting Some info");
  }
}
