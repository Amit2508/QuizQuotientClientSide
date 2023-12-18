import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TestGiven = ({ getState }) => {
  let myList = ["bg-blue-600", "bg-red-500", "bg-pink-400", "bg-orange-500"];
  const [state, setState] = useState(getState);
  const [bgColor, setbgColor] = useState("bg-white");
  const [text, setText] = useState("text-black");
  const [shadow, setShadow] = useState("shadow-sky-500");
  useEffect(() => {
    setState(getState);
  }, [getState]);

  useEffect(() => {
    if (state === 0) {
      setbgColor("bg-white");
      setText("text-black");
      setShadow("shadow-sky-500");
    } else if (state === 1) {
      setbgColor("bg-black");
      setText("text-white");
      setShadow("shadow-purple-500");
    }
  }, [state]);

  const Navigate = useNavigate();

  const handleNavigation = () => {
    Navigate("/quiz/result");
  };
  return (
    <>
      <div
        className={`inline-block p-4 m-2 shadow-2xl ${shadow} rounded-xl ${bgColor}`}
      >
        <div>
          <p className={`font-bold ${text}`}>Tests Given</p>
        </div>
        <div className="grid grid-cols-2 gap-12 p-2">
          <div
            className={`${myList.at(
              0
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-blue-600 hover:shadow-blue-700 hover:cursor-pointer`}
          >
            <div
              className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"
              onClick={() => handleNavigation()}
            ></div>
            <p className="font-bold text-white">Test1</p>
          </div>
          <div
            className={`${myList.at(
              1
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-red-500 hover:shadow-red-600 hover:cursor-pointer`}
          >
            <div
              className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"
              onClick={() => handleNavigation()}
            ></div>
            <p className="font-bold text-white">Test2</p>
          </div>
          <div
            className={`${myList.at(
              2
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-pink-400 hover:shadow-pink-500 hover:cursor-pointer`}
          >
            <div
              className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"
              onClick={() => handleNavigation()}
            ></div>
            <p className="font-bold text-white">Test3</p>
          </div>
          <div
            className={`${myList.at(
              3
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-orange-500 hover:shadow-orange-600 hover:cursor-pointer`}
          >
            <div
              className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"
              onClick={() => handleNavigation()}
            ></div>
            <p className="font-bold text-white">Test4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestGiven;
