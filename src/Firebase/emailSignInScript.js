import { collection, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";
import Cookies from "js-cookie";
import { insert_new_jwt } from "./googleSignInScript";

export async function email_password_login(email, password) {
  const userDocReference = doc(db, "EmailUser", email);
  const docSnapshot = await getDoc(userDocReference);

  try {
    if (docSnapshot.exists()) {
      const storedPassword = docSnapshot.data().password;
      if (storedPassword === password) {
        const user_token = JSON.stringify(docSnapshot.data());
        Cookies.set('ACCESS_TOKEN', user_token);
        insert_new_jwt(user_token, email);
      } else {
        alert('Invalid ID or Password');
      }
    } else {
      alert("Account not found");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function create_email_password_user(
  email,
  password,
  name,
  age,
  state,
  city,
  number,
  school,
  Class
) {
  const CurrentDate = new Date();
  try {
    const userDocReference = doc(db, "EmailUser", email);
    const docSnapshot = await getDoc(userDocReference);
    if (docSnapshot.exists()) {
      alert("email already exists please login");
    } else {
      const user_data = {
        email:email,
        password: password,
        given_name: name,
        family_name: "",
        age: age,
        state: state,
        city: city,
        number: number,
        school: school,
        Class: Class,
        picture: "",
      };
      const user_token = {
        email: email,
        password:password,
        given_name: name,
        family_name: "",
        age: age,
        state: state,
        city: city,
        number: number,
        school: school,
        Class: Class,
        picture: "",
        time: CurrentDate,
      };
      const userTokenString = JSON.stringify(user_token);
      await setDoc(userDocReference, user_data);
      Cookies.set("ACCESS_TOKEN", userTokenString);
      await insert_new_jwt(userTokenString, email);
    }
  } catch (error) {}
}
