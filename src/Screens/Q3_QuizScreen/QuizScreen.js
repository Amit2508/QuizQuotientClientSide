import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
const QuizScreen = () => {
  let stateVal = localStorage.getItem("web_state");
  if (stateVal === null) {
    stateVal = "0";
  }
  const [state, setState] = useState(parseInt(stateVal));
  const [background, setBackGround] = useState("bg-white");
  const [text, setText] = useState('text-black');

  useEffect(() => {
    if (state === 0) {
      setBackGround("bg-white");
      setText('text-black');
    } else {
      setBackGround("bg-slate-800");
      setText('text-white');
    }
  }, []);

  const generate_question_function = () => {
    const questions_pentagon = [];

    for (let i = 0; i < 14; i++) {
      questions_pentagon.push(
        <div
          key={i}
          className="p-1 w-20 bg-yellow-500 cursor-pointer rounded-xl sm:p-3"
        >
            <p className={`text-sm`}>Q-{i+1}</p>
        </div>
      );
    }
    return questions_pentagon;
  };

  return (
    <>
      <div className={`${background} h-screen`}>
        <div>
            <Navbar/>
        </div>

        <div className={`flex h-screen`}>
          <div className={`p-2 sm:p-4 border border-gren-600 rounded-xl h-screen`}>
            <div className={`mt-10`}>
                <p className={`${text} p-2`}>Questions</p>
            </div>
            <div className={`grid sm:grid-cols-3 sm:gap-4 gap-1 overflow-y-auto h-96 `}>
              {generate_question_function()}
            </div>
          </div>

          <div className={`w-full`}>
            <p className={`${text} p-2`}>Question Space</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizScreen;
