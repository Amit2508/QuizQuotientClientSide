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

export async function Reterieve_question(document) {
  const QuestionCollectionRef = collection(db, "Tests");
  const documentRef = doc(QuestionCollectionRef, document);

  try {
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      const documentData = documentSnapshot.data();
      const QuestionInfo = documentData.QuestionInfo;
      const extractQuestionInfo = JSON.parse(QuestionInfo);
      const data = documentData.TestDetails;
      const parse_data = JSON.parse(data);
      const json_data = JSON.parse(parse_data);
      const time = json_data.duration;
      const questions = json_data.questions;
      const send_data = {
        duration: time,
        Question: extractQuestionInfo,
        total: questions,
      };
      return send_data;
    } else {
      alert("Test has expired or does not exist");
    }
  } catch (error) {
    console.error("Error retrieving data: ", error);
    alert("Please Try Again Later....");
  }
}

export async function SaveAnswers(testid, answerList) {
  const token = Cookies.get("ACCESS_TOKEN");
  if (token.substring(0, 1) !== "{") {
    const decoded = jwtDecode(token);
    const email = decoded.email;
    const AnswerCollectionRef = collection(
      db,
      "GoogleUser",
      email,
      "TestsGiven"
    );
    const PaperCollectionRef = collection(db, "Tests", testid, "GoogleUser");

    const AnswerDocumentRef = doc(AnswerCollectionRef, testid);

    const PaperDocumentRef = doc(PaperCollectionRef, email);

    try {
      const AnswerDocumentSnapshot = await getDoc(AnswerDocumentRef);
      let CurrentDate = new Date();
      if (AnswerDocumentSnapshot.exists()) {
        alert("You have already given the test");
      } else {
        const data = {
          marks: "Not yet announced",
          answers: answerList,
          rank: "Not yet announced",
          startTime: CurrentDate,
          endTime: 0,
          status: "Giving",
        };

        await setDoc(AnswerDocumentRef, data);
        await setDoc(PaperDocumentRef, data);
        alert("Test Paper Started");
      }
    } catch (error) {
      alert("Internet connection weak, please try again after some time");
    }
  } else if (token.substring(0, 1) === "{") {
    const token_data = JSON.parse(token);
    const email = token_data.email;
    const AnswerCollectionRef = collection(
      db,
      "EmailUser",
      email,
      "TestsGiven"
    );
    const PaperCollectionRef = collection(db, "Tests", testid, "EmailUser");

    const AnswerDocumentRef = doc(AnswerCollectionRef, testid);

    const PaperDocumentRef = doc(PaperCollectionRef, email);

    try {
      const AnswerDocumentSnapshot = await getDoc(AnswerDocumentRef);

      if (AnswerDocumentSnapshot.exists()) {
        alert("You have already given the test");
      } else {
        const data = {
          marks: "Not yet announced",
          answers: answerList,
          rank: "Not yet announced",
        };

        await setDoc(AnswerDocumentRef, data);
        await setDoc(PaperDocumentRef, data);
        alert("Test Paper Submitted Successfully!!!");
      }
    } catch (error) {
      alert("Internet connection weak, please try again after some time");
    }
  } else {
    alert("Invalid Credentials");
  }
}

export async function UpdateAnswer(testId, answerList) {
  let email = "";
  let userType = "";
  const data = Cookies.get("ACCESS_TOKEN");
  if (data.substring(0, 1) === "{") {
    const cdata = JSON.parse(data);
    email = cdata.email;
    userType = "EmailUser";
  } else {
    const gdata = jwtDecode(data);
    email = gdata.email;
    userType = "GoogleUser";
  }

  // Construct the path to the document
  const userDocRef = doc(db, userType, email, "TestsGiven", testId);
  const testDocRef = doc(db, 'Tests', testId, userType, email);
  let CurrentDate = new Date();

  // Update the fields
  try {
    await updateDoc(userDocRef, {
      answers: answerList,
      endTime: CurrentDate,
      status: "Completed",
    });

    await updateDoc(testDocRef, {
      answers: answerList,
      endTime: CurrentDate,
      status: "Completed",
    });

    alert("Tests successfully submitted!");
  } catch (e) {
    console.error("Error updating document: ", e.message);
  }
}
