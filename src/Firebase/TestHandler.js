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

export async function SaveAnswers(tesid, answerList){
    
}
