import { collection, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";
import Cookies from "js-cookie";

export async function find_create_user(email, name, token) {
  // Stringify all the parameters
  const str_name = String(name);
  const str_email = String(email);

  try {
    // Get a reference to the "users" collection and specify the document name as "kahitoz"
    const userDocRef = doc(db, "GoogleUser", str_email);

    // Get the document snapshot
    const docSnapshot = await getDoc(userDocRef);

    // Check if the document exists
    if (docSnapshot.exists()) {
      const check = await check_logged_out_jwt(token);
      if (check === true) {
        alert("Session Expired");
      } else {
        Cookies.set("ACCESS_TOKEN", token);
        insert_new_jwt(token, email);
      }
    } else {
      const user_data = {
        name: str_name,
        age: 0,
        state: "",
        city: "",
        phone: "",
        school: "",
        class: "",
      };
      await setDoc(userDocRef, user_data);
      insert_new_jwt(token, email);
      Cookies.set("ACCESS_TOKEN", token);
    }
  } catch (error) {
    console.error("Error searching document: ", error);
  }
}

export async function insert_new_jwt(data, email) {
  const userDocRef = doc(db, "LoggedInJWT", data);
  const data_c = {
    email: email,
  };
  await setDoc(userDocRef, data_c);
}

export async function delete_new_jwt(token) {
  const userDocRef = doc(db, "LoggedInJWT", token);
  await deleteDoc(userDocRef);
}

export async function insert_old_jwt(token) {
  await delete_new_jwt(token);
  const userDocRef = doc(db, "LoggedOutJWT", token);
  const data_c = {
    email: "",
  };
  await setDoc(userDocRef, data_c);
}

export async function check_logged_out_jwt(token) {
  const userDocRef = doc(db, "LoggedOutJWT", token);
  const docSnapshot = await getDoc(userDocRef);
  if (docSnapshot.exists()) {
    return true;
  } else {
    return false;
  }
}

export async function check_current_jwt(token) {
  const userDocRef = doc(db, "LoggedInJWT", token);
  const docSnapshot = await getDoc(userDocRef);
  if (docSnapshot.exists()) {
    return true;
  } else {
    return false;
  }
}
