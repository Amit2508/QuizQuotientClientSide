import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import QuestionStatusHolder from "./Components/QuestionStatusHolder";

const QuizScreen = () => {
  let stateVal = localStorage.getItem("web_state");
  if (stateVal === null) {
    stateVal = "0";
  }
  const [state, setState] = useState(parseInt(stateVal));
  const [background, setBackGround] = useState("bg-white");
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
    } else {
      setBackGround("bg-slate-800");
      setText("text-white");
    }
  }, []);

  return (
    <>
      <div className={`${background}`}>
        <div>
          <Navbar updateState={updateState} />
        </div>
        <div className={`flex justify-evenly`}>
          <div>
            <QuestionStatusHolder state={state}/>
          </div>
          <div>
            <p>This is the Question Info Holder</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizScreen;
