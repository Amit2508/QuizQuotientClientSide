import { useEffect, useState } from "react";
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
      <div className={`${bg} sm:m-4 m-1`}>
        <div>
          <p className={`${text} sm:m-2 m-1`}>Question Panel</p>
        </div>
        <div
          className={`grid sm:grid-cols-3 grid-cols-1 sm:gap-2 gap-1 sm:p-2 p-1 overflow-auto h-64 shadow-md shadow-blue-200 rounded-xl `}
        >
          {generateQuestionHolder()}
        </div>
        <div className={`sm:mt-6 mt-2 sm:p-2 p-1`}>
          <div
            className={`flex sm:flex sm:flex-row flex-col items-center m-2 sm:justify-between`}
          >
            <div className={`w-12 h-12 bg-yellow-200 rounded-lg`}></div>
            <p className={`${text} ms-2`}>0 - Unattempted</p>
          </div>
          <div
            className={`flex sm:flex sm:flex-row flex-col items-center m-2 sm:justify-between`}
          >
            <div className={`w-12 h-12 bg-green-200 rounded-lg`}></div>
            <p className={`${text}`}>0 - Attempted</p>
          </div>
          <div
            className={`flex sm:flex sm:flex-row flex-col items-center m-2 sm:justify-between`}
          >
            <div className={`w-12 h-12 bg-blue-200 rounded-lg`}></div>
            <p className={`${text}`}>0 - Review</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionStatusHolder;
