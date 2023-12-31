import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./config";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export async function SendConfirmationRequest(
  name,
  type,
  email,
  testID,
  phone,
  amount
) {
  try {
    const testDocRef = doc(db, "Tests", testID);
    const currentTime = new Date();
    const typeCollectionRef = collection(testDocRef, type);
    const emailDocRef = doc(typeCollectionRef, email);
    const data = {
      name: name,
      phone: phone,
      amount: amount,
      testId: testID,
      status: "pending",
      time: currentTime,
    };

    await setDoc(emailDocRef, data);
    alert("Request Sent Successfully!!!!")
  } catch (error) {
    alert("Internet Low , Please Try again");
    console.error("Error sending confirmation request:", error.message);
    throw error;
  }
}

export async function GetPaymentAmount(test_id) {
  try {
    const testDocRef = doc(db, "Tests", test_id);
    const docSnapshot = await getDoc(testDocRef);
    if (docSnapshot.exists()) {
      const testData = docSnapshot.data();

      if (testData && testData.Amount !== undefined) {
        return testData.Amount;
      } else {
        throw new Error("Amount field not found in the document");
      }
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error getting payment amount:", error.message);
    throw error;
  }
}

export async function CheckIfPaymentExists(testId) {
  try {
    const testDocRef = doc(db, "Tests", testId);
    const paymentCollectionRef = collection(testDocRef, getTypeEmail().type);
    const paymentDocRef = doc(paymentCollectionRef, getTypeEmail().email);
    const docSnapshot = await getDoc(paymentDocRef);
    if (docSnapshot.exists()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert("Connection Lost");
    console.error("Error checking document existence:", error.message);
    throw error;
  }
}

export async function CheckIfStatusIsConfirmed(testId) {
  try {
    const testDocRef = doc(db, "Tests", testId);
    const paymentCollectionRef = collection(testDocRef, getTypeEmail().type);
    const paymentDocRef = doc(paymentCollectionRef, getTypeEmail().email);

    const docSnapshot = await getDoc(paymentDocRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const status = data && data.status;
      if (status === "confirmed") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking status:", error.message);
    throw error;
  }
}

function getTypeEmail() {
  const token = Cookies.get("ACCESS_TOKEN");
  let email = "";
  let type = "";
  if (token.substring(0, 1) === "{") {
    const cToken = JSON.parse(token);
    email = cToken.email;
    type = "Payment_EmailUser";
  } else {
    const cToken = jwtDecode(token);
    email = cToken.email;
    type = "Payment_GoogleUser";
  }
  return { email: email, type: type };
}
