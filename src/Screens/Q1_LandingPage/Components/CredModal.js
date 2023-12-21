import React, { useEffect, useState } from "react";
import { create_email_password_user } from "../../../Firebase/emailSignInScript";
import { useNavigate } from "react-router-dom";
import { GoogleSignInProvider } from "../Scripts/googlesignin";
import { email_password_login } from "../../../Firebase/emailSignInScript";

const CredModal = ({ action, getStatus }) => {
  const [visiblityArray, setVisiblityArray] = useState(false);

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [Class, setClass] = useState("");
  const [school, setSchool] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [googleAction, setGoogleAction] = useState("");

  useEffect(() => {
    switch (action) {
      case "Login":
        setTitle("Welcome User");
        setSubtitle("..Or login using google");
        setGoogleAction("Login using Google");
        setVisiblityArray(false);
        break;
      case "Register":
        setTitle("Create Account");
        setVisiblityArray(true);
        setSubtitle(".. Or Register using google");
        setGoogleAction("Register using google");
        break;
    }
  }, [action]);

  const placeholder = [
    "Enter Email",
    "Enter password",
    "Renter password",
    "Enter your name",
    "Enter your age",
    "Enter State",
    "Enter City",
    "Enter phone number",
    "Enter School/University(if applicable)",
    "Enter your class",
  ];
  const value = [
    email,
    password,
    repass,
    name,
    age,
    state,
    city,
    phone,
    school,
    Class,
  ];
  const type = [
    "email",
    "password",
    "password",
    "text",
    "number",
    "text",
    "text",
    "number",
    "text",
    "text",
  ];
  const visiblity = [
    true,
    true,
    visiblityArray,
    visiblityArray,
    visiblityArray,
    visiblityArray,
    visiblityArray,
    visiblityArray,
    visiblityArray,
    visiblityArray,
  ];
  const handleChangeFunctions = [
    (e) => setEmail(e.target.value),
    (e) => setPassword(e.target.value),
    (e) => setRepass(e.target.value),
    (e) => setName(e.target.value),
    (e) => setAge(e.target.value),
    (e) => setState(e.target.value),
    (e) => setCity(e.target.value),
    (e) => setPhone(e.target.value),
    (e) => setSchool(e.target.value),
    (e) => setClass(e.target.value),
  ];

  const RenderInputField = () => {
    const inputFields = [];
    for (let i = 0; i < placeholder.length; i++) {
      inputFields.push(
        visiblity[i] && (
          <input
            key={i}
            type={type[i]}
            placeholder={placeholder[i]}
            value={value[i]}
            onChange={handleChangeFunctions[i]}
            className={`p-2 m-2 rounded-lg`}
          />
        )
      );
    }
    return inputFields;
  };

  const Navigate = useNavigate();
  const handleNavigation = () => {
    Navigate("/home");
  };

  async function HandleNewAccount(
    email,
    password,
    repass,
    name,
    age,
    state,
    city,
    number,
    school,
    Class
  ) {
    if (email.length < 2) {
      alert("invalid email");
    } else if (password.length < 8) {
      alert("password should be of 8 or more characters");
    } else if (repass !== password) {
      alert("confirm password does not match");
    } else if (name.length < 2) {
      alert("invalid name");
    } else if (age.length <= 0) {
      alert("ivalid age");
    } else if (state.length < 2) {
      alert("invalid state length = ", state.length);
    } else if (city.length < 2) {
      alert("Invalid city");
    } else if (number === undefined || number.length < 10) {
      alert("Invalid Phone Number");
    } else if (school.length < 2) {
      alert("Invalid Schoold");
    } else if (Class.length === 0) {
      alert("invalid class");
    } else {
      await create_email_password_user(
        email,
        repass,
        name,
        age,
        state,
        city,
        number,
        school,
        Class
      );
      Navigate('/home');
    }
  }

  async function handleEmailLogin(email, password) {
    if (email.length < 2) {
      alert("Invalid Email");
    } else if (password.length < 8) {
      alert("Invalid password");
    } else {
      await email_password_login(email, password);
      Navigate('/home');
    }
  }

  return (
    <>
      {getStatus && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500 p-2">
          <div className="bg-blue-200 p-4 rounded-lg shadow-xl max-h-full overflow-y-auto">
            <button
              onClick={() => getStatus(false)}
              className="flex bg-gray-100 p-1 rounded-sm font-bold"
            >
              X
            </button>
            <div className="flex flex-col">
              <div className={`font-bold mb-4`}>
                <p>{title}</p>
              </div>

              <div className={`sm:grid sm:grid-cols-2 sm:gap-4 flex flex-col`}>
                {RenderInputField()}
              </div>
            </div>
            <div
              className="bg-blue-600 m-2 p-1 block rounded-lg cursor-pointer hover:bg-blue-400"
              onClick={
                visiblityArray === true
                  ? () =>
                      HandleNewAccount(
                        email,
                        password,
                        repass,
                        name,
                        age,
                        state,
                        city,
                        phone,
                        school,
                        Class
                      )
                  : () => handleEmailLogin(email, password)
              }
            >
              <p className="text-white">{title}</p>
            </div>
            <div>
              <p className="p-2 m-2 rounded-lg"> {subtitle}</p>
            </div>
            <div className="inline-block">
              <div className="flex bg-gray-50  justify-center rounded-xl shadow-2xl cursor-pointer">
                <div>
                  <GoogleSignInProvider />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CredModal;




