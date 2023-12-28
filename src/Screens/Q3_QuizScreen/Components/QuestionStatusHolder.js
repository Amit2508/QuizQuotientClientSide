import { useEffect, useState } from "react";
const QuestionStatusHolder = ({ state, total, onSelectBox }) => {
  const [text, setText] = useState("text-black");
  const [bg, setBg] = useState("bg-white");
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
    for (let i = 0; i < total; i++) {
      QuestionHolder.push(
        <div
          id={i}
          className={`w-12 h-12 bg-yellow-200 rounded-lg cursor-pointer`}
          onClick={() => onSelectBox(i + 1)}
        >
          <p>{i + 1}</p>
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
        <div className="flex items-center justify-center">
          <div
            className={`grid sm:grid-cols-3 grid-cols-1 gap-3 p-4 overflow-auto sm:h-auto h-64 shadow-md shadow-blue-200 rounded-xl `}
          >
            {generateQuestionHolder()}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionStatusHolder;
