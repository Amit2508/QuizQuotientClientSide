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
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export async function Get_given_tests() {
  const token = Cookies.get("ACCESS_TOKEN");
  let email = "";
  let type = "";
  if (token.substring(0, 1) === "{") {
    const data = JSON.parse(token);
    email = data.email;
    type = "EmailUser";
  } else {
    const data = jwtDecode(token);
    email = data.email;
    type = "GoogleUser";
  }
  try {
    const UsersTestsCollectionRef = collection(db, type, email, "TestsGiven");
    const UserCollectionSnapShot = await getDocs(UsersTestsCollectionRef);
    const testHolder = [];
    UserCollectionSnapShot.forEach((doc) => {
      testHolder.push(doc.id);
    });
    const firstFourTests = testHolder.slice(0, 4);

    return firstFourTests;
  } catch (error) {
    console.error(error);
  }
}
