import {
  collection,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";
import { check_current_jwt } from "./googleSignInScript";
import Cookies from "js-cookie";

export async function EmailUserValueUpdater(
  age,
  city,
  state,
  phone,
  school,
  grade,
  email
) {
  const token = JSON.parse(Cookies.get("ACCESS_TOKEN"));
  console.log("This is the token", token);
  const n_token = JSON.stringify(token);
  const result = await check_current_jwt(n_token);
  if (result === false) {
    alert("Session Expired");
  }

  if (result === true) {
    try {
      const userDocReference = doc(db, "EmailUser", email);
      const docSnapshot = await getDoc(userDocReference);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();

        // Compare each field before updating
        const age1 = data.age;
        const city1 = data.city;
        const state1 = data.state;
        const phone1 = data.number;
        const school1 = data.school;
        const grade1 = data.Class;

        const updatedFields = {};

        if (age !== age1) {
          updatedFields.age = age;
        }

        if (city !== city1) {
          updatedFields.city = city;
        }

        if (state !== state1) {
          updatedFields.state = state;
        }

        if (phone !== phone1) {
          updatedFields.number = phone;
        }

        if (school !== school1) {
          updatedFields.school = school;
        }

        if (grade !== grade1) {
          updatedFields.Class = grade;
        }

        // Update only the fields that have changed
        await updateDoc(userDocReference, updatedFields);

        alert(
          "Fields updated successfully. Log out and Log in again to see the changes"
        );
      } else {
        console.log("Document does not exist.");
      }
    } catch (error) {
      console.error("Error updating user values:", error);
      alert("Please try again after some time!!");
    }
  }
}

export async function GoogleUserGetter(email, token) {
  const result = await check_current_jwt(token);
  if (result === true) {
    try {
      const userDocReference = doc(db, "GoogleUser", email);
      const docSnapshot = await getDoc(userDocReference);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        return data;
      }
    } catch (error) {
      alert("Please try again after some time!!!");
    }
  }
}

export async function GoogleUserUpdater( age,
    city,
    state,
    phone,
    school,
    grade,
    email){
        const token = Cookies.get("ACCESS_TOKEN");
        const result = await check_current_jwt(token);
        if (result === false) {
          alert("Session Expired");
        }
      
        if (result === true) {
          try {
            const userDocReference = doc(db, "GoogleUser", email);
            const docSnapshot = await getDoc(userDocReference);
      
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              const age1 = data.age;
              const city1 = data.city;
              const state1 = data.state;
              const phone1 = data.number;
              const school1 = data.school;
              const grade1 = data.Class;
      
              const updatedFields = {};
      
              if (age !== age1) {
                updatedFields.age = age;
              }
      
              if (city !== city1) {
                updatedFields.city = city;
              }
      
              if (state !== state1) {
                updatedFields.state = state;
              }
      
              if (phone !== phone1) {
                updatedFields.phone = phone;
              }
      
              if (school !== school1) {
                updatedFields.school = school;
              }
      
              if (grade !== grade1) {
                updatedFields.Class = grade;
              }
              await updateDoc(userDocReference, updatedFields);
      
              alert(
                "Fields updated successfully."
              );
            } else {
              console.log("Document does not exist.");
            }
          } catch (error) {
            console.error("Error updating user values:", error);
            alert("Please try again after some time!!");
          }
        }
}
