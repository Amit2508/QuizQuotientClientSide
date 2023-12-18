import { useEffect, useState } from "react";

const MarkSection = ({ state }) => {
  const [textColor, setTextColor] = useState("text-yellow-600");
  const [backgroundColor, setBackgroundColor] = useState("bg-white");
  const [borderColor, setBorderColor] = useState("border-yellow-600");

  useEffect(() => {
    state === 0 ? setTextColor("text-yellow-600") : setTextColor("text-white");
    state === 0
      ? setBackgroundColor("bg-white")
      : setBackgroundColor("bg-sky-900");
    state === 0
      ? setBorderColor("border-yello-600")
      : setBorderColor("border-white");
  }, [state]);
  return (
    <>
      <div className={`p-4`}>
        <div className={`${backgroundColor} rounded-lg shadow-xl shadow-blue-400`}>
          <p className={`${textColor} p-2`}>Thanks for the test attempt</p>
          <div>
            <p className={`${textColor} p-2`}>These are your marks - </p>
          </div>
          <div>
            <p className={`font-bold ${textColor} text-4xl p-2`}>100/100</p>
          </div>
          <div>
            <button
              className={`border ${borderColor} ${textColor} p-2 m-2 rounded-xl cursor-pointer`}
            >
              Review Your Answers
            </button>
          </div>
          <div>
            <button
              className={`border ${borderColor} ${textColor}  p-2 m-2 rounded-xl cursor-pointer`}
            >
              Blame
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarkSection;
