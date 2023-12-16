import BackGround1 from "../../Icons/vector-5.svg";
import actor from "../../Icons/actor1.png";
import { useState, useEffect } from "react";
import CredModal from "./CredModal";

const SubNavbar = ({ getState }) => {
  const [bg, setBg] = useState("bg-steelblue-200");
  const [bg1, setBg1] = useState("text-blue-400");
  const [state, setState] = useState(getState);
  const [action, setAction] = useState("");
  const [modal, showModal] = useState(false);

  useEffect(() => {
    setState(getState);
  }, [getState]);

  useEffect(() => {
    if (state === 0) {
      setBg("bg-steelblue-200");
      setBg1("text-blue-400");
    } else if (state === 1) {
      setBg("bg-slate-800");
      setBg1("text-white");
    }
  }, [state]);

  const pass = (value) => {
    const act = ["Login", "Register"];
    setAction(act[value]);
    showModal(true);
  };
  return (
    <>
      <div className="relative w-full">
        <div
          className={`${bg} text-left text-2xl text-black font-base flex items-center justify-center z-10 sm:h-full`}
        >
          <img src={BackGround1} alt={`Background`} className="h-full" />
        </div>
        <div className={`absolute w-full h-full inset-0 z-20`}>
          <div
            className={`sm:flex sm:flex-row flex justify-evenly items-center p-4`}
          >
            <div>
              <p
                className={`sm:text-5xl text-2xl ${bg1} rounded-t-2xl p-2 bg-opacity-40 font-bold `}
              >
                Welcome to Quiz Quotient
              </p>
              <p
                className={`sm:text-3xl text-lg ${bg1} rounded-b-2xl p-2 bg-opacity-40 font-bold `}
              >
                An interactive and fun way to participate in quiz
              </p>
              <div className={`flex sm:flex-row flex-col justify-evenly`}>
                <button
                  className={`sm:p-3 p-1 bg-pink-500 rounded-xl font-bold text-white`}
                  onClick={() => pass(0)}
                >
                  Log In
                </button>
                <button
                  className={`sm:p-3 p-1 bg-purple-500 rounded-xl font-bold text-white mt-2 sm:mt-0`}
                  onClick={() => pass(1)}
                >
                  Register
                </button>
              </div>
            </div>
            <div className={`block`}>
              <img src={actor} alt={`actor`} className={`sm:block hidden`} />
            </div>
            <div>
              {modal && <CredModal action={action} getStatus={showModal} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
