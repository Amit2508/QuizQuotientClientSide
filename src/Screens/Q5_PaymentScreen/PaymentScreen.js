import Cookies from "js-cookie";
import Payments from "../Icons/PaymentQR.jpg";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SendConfirmationRequest } from "../../Firebase/PaymentCheck";
const PaymentScreen = () => {
  const [amount, setAmount] = useState("");
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { name, cost } = state;
      setAmount(cost);
      setId(name);
    }
  }, [state]);
const Navigate = useNavigate();
  const HandleConfirmationRequest = async () => {
    if (number.length !== 10) {
      alert("Invalid Number");
    } else {
      await SendConfirmationRequest(
        name,
        GetNameType().user,
        GetNameType().email,
        id,
        number,
        amount
      );
    }
    alert('Paymener Approval Request Sent');
    Navigate('/home');
  };

  return (
    <>
      <div className="text-blue-500 text-xl font-bold">
        Please Scan and pay the required amount
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="mt-2">
            <img src={Payments} />
          </div>

          <div className="mt-2">
            <div>Enter the phone Number from which we will recieve payment</div>
            <div className="mt-2">
              <input
                value={number}
                type="number"
                placeholder="Enter the phone number(Payment)"
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </div>
          </div>
          <div>Enter the phone Name from which we will recieve payment</div>
          <div className="mt-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the name (Payment)"
            ></input>
          </div>
          <div>Payment For {id}</div>
          <div className="mt-2">
            <input value={amount} placeholder="Quiz Name"></input>
          </div>
          <button
            className="p-3 rounded-xl bg-red-700 mt-6 text-white"
            onClick={HandleConfirmationRequest}
          >
            Send Confirmation Request
          </button>
        </div>
      </div>
    </>
  );
};
export default PaymentScreen;

function GetNameType() {
  const token = Cookies.get("ACCESS_TOKEN");
  let email = "";
  let userType = "";
  if (token.substring(0, 1) === "{") {
    const c_token = JSON.parse(token);
    email = c_token.email;
    userType = "Payment_EmailUser";
  } else {
    const c_token = jwtDecode(token);
    email = c_token.email;
    userType = "Payment_GoogleUser";
  }

  return { email: email, user: userType };
}
