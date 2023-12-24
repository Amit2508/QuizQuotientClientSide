import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

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

    // Sort the tests based on the date in descending order
    UpcomingTestsHolder.sort((a, b) => b.date - a.date);

    // Keep only the first two items (the two latest)
    const latestTests = UpcomingTestsHolder.slice(0, 2);

    return latestTests;
  } catch (error) {
    alert("Please retry again");
    console.log("These are the error - ", error);
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
        date: formatDate(data.Date.substring(0,9)),
      });
    });
    return UpcomingTestsHolder;
  } catch (error) {
    alert("Pleae retry again")
    console.log("These are the error - ", error);
  }
}



function formatDate(data) {
  const formatDate = new Date(data);
  return formatDate.toLocaleString();
}