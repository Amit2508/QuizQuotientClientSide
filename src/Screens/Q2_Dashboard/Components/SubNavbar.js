import { useEffect, useState } from "react";
import illustration1 from "../../Icons/IllustrationHome.png";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SubNavbar = ({ getState }) => {
  const [state, setState] = useState(getState);
  const [text, setText] = useState("text-black");
  const [name, setName] = useState("");

  useEffect(() => {
    setState(getState);
  }, [getState]);
  const Navigate = useNavigate();
  useEffect(() => {
    const GET_TOKEN = Cookies.get("ACCESS_TOKEN");
    if (GET_TOKEN !== undefined) {
      if (GET_TOKEN.length > 10) {
        if (GET_TOKEN.substring(0, 1) !== "{") {
          const decode_data = jwtDecode(GET_TOKEN);
          const data1 = decode_data.given_name;
          const data2 = decode_data.family_name;
          const c_name = data1 + " " + data2;
          setName(c_name);
        }else{
          const data = JSON.parse(GET_TOKEN);
          const c_name = data.given_name;
          setName(c_name);
        }
      } else {
        Navigate("/landing");
      }
    }
  }, []);
  const [bgColor, setbgColor] = useState("bg-sky-100");

  useEffect(() => {
    if (state === 0) {
      setbgColor("bg-sky-100");
      setText("text-black");
    } else if (state === 1) {
      setbgColor("bg-sky-900");
      setText("text-white");
    }
  }, [state]);
  return (
    <>
      <div
        className={`${bgColor} sm:flex sm:justify-evenly sm:items-center justify-evenly items-center p-4`}
      >
        <div className="sm:flex sm:flex-col sm:items-center">
          <p className={`text-2xl font-bold sm:text-6xl ${text}`}>Welcome!!!</p>
          <p className={`text-xl font-bold sm:text-5xl ${text}`}>{name}</p>
        </div>
        <div>
          <img
            src={illustration1}
            alt={``}
            className="w-96 h-64 sm:w-auto sm:h-96"
          />
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
