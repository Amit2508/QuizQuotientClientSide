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
  const QuestionCollectionRef = collection(db, "Tests"); // 'Tests' is the collection name
  const documentRef = doc(QuestionCollectionRef, document); // 'document' is the document ID

  try {
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      const documentData = documentSnapshot.data();
      const QuestionInfo = documentData.QuestionInfo;
      const extractQuestionInfo = JSON.parse(QuestionInfo);
      const data = documentData.TestDetails;
      const parse_data = JSON.parse(data);
      const time = parse_data.duration;
      const questions = parse_data.questions;
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
      "GoogleUser", email,"TestsGiven"
    );
    const PaperCollectionRef = collection(
      db,
      "Tests",testid,"GoogleUser"
    );

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
  }
}
