import BackGround1 from "../../Icons/vector-5.svg";
import actor from "../../Icons/actor1.png";
import { useState, useEffect } from "react";

const SubNavbar = ({getState}) => {
  const [bg, setBg] = useState("bg-steelblue-200");
  const [bg1, setBg1] = useState("text-black")
  const [state, setState] = useState(getState);

  useEffect(() => {
    setState(getState);
  }, [getState]);

  useEffect(() => {
    if (state === 0) {
      setBg("bg-steelblue-200");
      setBg1("text-black")
    } else if (state === 1) {
      setBg("bg-slate-800");
      setBg1("text-white")
    }

  }, [state]);

  return (
    <>
      <div className={`absolute w-full`}>
        <div
          className={`${bg} text-left text-2xl text-black font-base flex items-center justify-center z-10 sm:h-screen`}
        >
          <img src={BackGround1} alt={`Background`} className="h-full" />
        </div>
        <div className={`absolute w-full h-full inset-0 z-20`}>
          <div className={`flex justify-evenly items-center p-4`}>
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
            </div>
            <div className={``}>
              <img src={actor} alt={`actor`} className={`sm:h-screen h-84`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
