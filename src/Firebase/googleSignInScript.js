import { collection, doc, setDoc, getDoc } from "firebase/firestore";
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
            Cookies.set('ACCESS_TOKEN', token);
            console.log("Document with name 'kahitoz' exists: Yes");
        } else {
            const user_data = {
                name:str_name,
                age:0,
                state:'',
                city:'',
                phone:'',
                school:'',
                class:'',
            };
            await setDoc(userDocRef, user_data);
            Cookies.set('ACCESS_TOKEN', token);
            console.log("Document with name 'kahitoz' exists: No");
        }
    } catch (error) {
        console.error("Error searching document: ", error);
    }
}
