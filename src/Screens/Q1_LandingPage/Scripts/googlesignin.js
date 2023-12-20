import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import Credentials from "../../Credentials.json";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export function GoogleSignInProvider() {
  const Navigate = useNavigate();
  function handleCallbackResponse(response) {
    console.log("this is the response", response.credential)
    Cookies.set('ACCESS_TOKEN', response.credential);
    Navigate('/home')
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
