import { useDebugValue, useEffect, useState } from "react";
import { GetQuestionsID } from "../Scripts/QuestionDetailsPuller";
const QuestionStatusHolder = ({ state }) => {

  const [text, setText] = useState("text-black");
  const [bg, setBg] = useState("bg-white");
  const GetId = GetQuestionsID();
  useEffect(() => {
    if (state === 0) {
      setText("text-black");
      setBg("bg-white");
    } else {
      setText("text-white");
      setBg("bg-slate-800");
    }
  }, [state]);
  const generateQuestionHolder = () => {
    const QuestionHolder = [];
    for (let i = 1; i <= GetId.length; i++) {
      QuestionHolder.push(
        <div
          id={i}
          className={`w-12 h-12 bg-yellow-200 rounded-lg cursor-pointer`}
        >
          <p>{i}</p>
        </div>
      );
    }
    return QuestionHolder;
  };
  return (
    <>
      <div className={`${bg}`}>
        <div>
          <p className={`${text} m-2`}>Question Panel</p>
        </div>
        <div
          className={`grid sm:grid-cols-3 grid-cols-2 gap-2 p-2 overflow-auto h-64 shadow-md shadow-blue-200 rounded-xl`}
        >
          {generateQuestionHolder()}
        </div>
        <div className={`mt-6`}>
          <div className={`flex items-center m-2 justify-between`}>
            <div className={`w-12 h-12 bg-yellow-200 rounded-lg`}></div>
            <p className={`${text} ms-2`}>0 - Unattempted</p>
          </div>
          <div className={`flex items-center m-2 justify-between`}>
            <div className={`w-12 h-12 bg-green-200 rounded-lg`}></div>
            <p className={`${text}`}>0 - Attempted</p>
          </div>
          <div className={`flex items-center m-2 justify-between`}>
            <div className={`w-12 h-12 bg-blue-200 rounded-lg`}></div>
            <p className={`${text}`}>0 - Review</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionStatusHolder;
