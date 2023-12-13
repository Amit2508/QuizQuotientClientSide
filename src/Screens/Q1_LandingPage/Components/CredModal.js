import React, { useEffect, useState } from "react";
import google from "../../Icons/google.png";

const CredModal = ({ action, getStatus }) => {
  const [confirmPassVisible, setConfirmpassVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [ageVisible, setAgeVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [subtitle, setSubtitle] = useState("");
  const [googleAction, setGoogleAction] = useState("");

  useEffect(() => {
    switch (action) {
      case "Login":
        setTitle("Welcome User");
        setSubtitle("..Or login using google");
        setGoogleAction("Login using Google");
        setConfirmpassVisible(false);
        setNameVisible(false);
        setAgeVisible(false);
        break;
      case "Register":
        setTitle("Create Account");
        setConfirmpassVisible(true);
        setNameVisible(true);
        setAgeVisible(true);
        setSubtitle(".. Or Register using google");
        setGoogleAction("Register using google");
    }
  }, [action]);

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPassword(e.target.value);
  };
  const repassHandler = (e) => {
    setRepass(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      {getStatus && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500">
          <div className="bg-blue-200 p-4 rounded-lg shadow-xl">
            <button onClick={() => getStatus(false)} className="flex bg-gray-100 p-1 rounded-sm font-bold">
              X
            </button>
            <div className="flex flex-col">
              <p>{title}</p>
              <input
                placeholder="Enter Email"
                value={email}
                type="email"
                onChange={emailHandle}
                className="p-2 m-2 rounded-lg"
              />
              <input
                placeholder="Enter password"
                value={password}
                type="password"
                onChange={passHandler}
                className="p-2 m-2 rounded-lg"
              />
              {confirmPassVisible && (
                <input
                  placeholder="Re-enter your password"
                  value={repass}
                  type="password"
                  onChange={repassHandler}
                  className="p-2 m-2 rounded-lg"
                />
              )}
              {nameVisible && (
                <input
                  placeholder="Enter your name"
                  value={name}
                  onChange={nameHandler}
                  className="p-2 m-2 rounded-lg"
                />
              )}
              {ageVisible && (
                <input
                  placeholder="Enter Your age"
                  value={age}
                  type="number"
                  onChange={ageHandler}
                  className="p-2 m-2 rounded-lg"
                />
              )}
            </div>
            <div className="bg-blue-600 m-2 p-1 block rounded-lg cursor-pointer hover:bg-blue-400">
              <p className="text-white">{title}</p>
            </div>
            <div>
              <p className="p-2 m-2 rounded-lg"> {subtitle}</p>
            </div>
            <div className="inline-block">
              <div className="flex bg-gray-50 p-2 justify-center rounded-xl shadow-2xl cursor-pointer">
                <img src={google} alt="Google" className="w-8 h-8" />
                <p className="ms-2">{googleAction}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CredModal;
