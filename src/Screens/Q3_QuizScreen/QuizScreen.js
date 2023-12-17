import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import QuestionStatusHolder from "./Components/QuestionStatusHolder";
import QuestionHolder from "./Components/QuestionHolder";

const QuizScreen = () => {
  let stateVal = localStorage.getItem("web_state");
  if (stateVal === null) {
    stateVal = "0";
  }
  const [state, setState] = useState(parseInt(stateVal));
  const [background, setBackGround] = useState("bg-black");
  const [text, setText] = useState("text-black");

  const updateState = (state) => {
    if (state === 0) {
      setState(1);
    }
    if (state === 1) {
      setState(0);
    }
  };

  useEffect(() => {
    if (state === 0) {
      setBackGround("bg-white");
      setText("text-black");
    }
    if (state === 1) {
      setBackGround("bg-sky-900");
      setText("text-white");
    }
  }, [state]);

  return (
    <>
      <div className={`border border-black ${background} h-screen`}>
        <div>
          <Navbar updateState={updateState} />
        </div>
        <div className={`flex justify-evenly`}>
          <div>
            <QuestionStatusHolder state={state} />
          </div>
          <div className={`w-full`}>
            <QuestionHolder state={state} />
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizScreen;
