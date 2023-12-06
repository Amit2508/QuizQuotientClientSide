import { useEffect, useState } from "react";
import illustration1 from "../../Icons/IllustrationHome.png";

const SubNavbar = ({ getState }) => {
  const [state, setState] = useState(getState);
  const [text, setText] = useState("text-black");

  useEffect(() => {
    setState(getState);
  }, [getState]);

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
          <p className={`text-xl font-bold sm:text-5xl ${text}`}>User</p>
        </div>
        <div>
          <img src={illustration1} className="w-96 h-64 sm:w-auto sm:h-96" />
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
