import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import Credentials from "../../Credentials.json"
import Cookies from'js-cookie'
import { useNavigate } from "react-router-dom";

export function GoogleSignInProvider() {
  const Navigate = useNavigate();
  const get_jwt_code = (CredResponse) =>{
    Cookies.set("ACCESS_TOKEN", CredResponse.credential);
    // post_jwt_token(CredResponse.credential);
    Navigate('/home');
  }
  return (
    <>
      <GoogleOAuthProvider clientId={Credentials.client_id}>
        <GoogleLogin
          onSuccess={(CredResponse) => get_jwt_code(CredResponse)}
          onError={() => console.log("Login Failed")}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export async function post_jwt_token(data) {
  const api_head = Credentials.client_id;
  const api = 'emails/jwt/';
  const combined_api = api_head.concat(api);

  const post_data = await fetch(combined_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // Handle the response as needed
  const responseJson = await post_data.json();
  console.log(responseJson);

  // Return the response or handle it further
  return responseJson;
}
