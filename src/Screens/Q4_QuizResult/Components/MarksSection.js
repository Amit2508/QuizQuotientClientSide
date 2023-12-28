import { useEffect, useState } from "react";

const MarkSection = ({ state, marks }) => {
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
      <div className={`p-2`}>
        <div className={`${backgroundColor} rounded-lg shadow-xl shadow-blue-400`}>
          <p className={`${textColor} p-2`}>Thanks for the test attempt</p>
          <div>
            <p className={`${textColor} p-2`}>These are your marks - </p>
          </div>
          <div>
            <p className={`font-bold ${textColor} text-6xl p-7`}>{marks}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarkSection;
