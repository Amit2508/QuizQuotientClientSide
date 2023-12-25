import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
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
      UpcomingTestsHolder.push({
        tests: doc.id,
        TestDetails: data.TestDetails,
        date: formatDate(data.Date),
      });
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

  try {
    const TestColectionRef = collection(db, "Tests");
    const TestCollectionSnapShot = await getDocs(TestColectionRef);
    const UpcomingTestsHolder = [];

    TestCollectionSnapShot.forEach((doc) => {
      const data = doc.data();
      UpcomingTestsHolder.push({
        tests: doc.id,
        TestDetails: data.TestDetails,
        date: formatDate(data.Date.substring(0, 9)),
      });
    });
    return UpcomingTestsHolder;
  } catch (error) {
    alert("Pleae retry again");
    console.log("These are the error - ", error);
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
    // Handle the error appropriately (e.g., throw it, log it, or return a specific value)
    throw error;
  }
}
