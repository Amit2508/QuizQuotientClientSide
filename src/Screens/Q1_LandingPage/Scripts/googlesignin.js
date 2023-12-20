import Credentials from "../../Credentials.json";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { find_create_user } from "../../../Firebase/googleSignInScript";
import { jwtDecode } from "jwt-decode";
export function GoogleSignInProvider() {
  const Navigate = useNavigate();
  async function handleCallbackResponse (response) {
    const token = response.credential;
    const data = jwtDecode(token);
    const first_name = data.given_name;
    const last_name = data.family_name;
    const email = data.email;
    const complete_name = first_name+" "+last_name;
    await find_create_user(email, complete_name, token)
    Navigate('/home');
    if (response.error) {
      return;
    }
  }
  
  const client_id = Credentials.client_id;
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: client_id,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <div
        id="signInDiv"
        className="bg-text-2 p-6 rounded-lg text-white font-bold text-xl"
      ></div>
    </>
  );
}
