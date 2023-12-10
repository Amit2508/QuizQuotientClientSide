import { useEffect, useState } from "react";

const TestUpcoming = ({ getState }) => {
  let myList = ["bg-pink-600", "bg-red-500", "bg-pink-400", "bg-orange-500"];
  const [state, setState] = useState(getState);
  const [bgColor, setbgColor] = useState("bg-white");
  const [text, setText] = useState("text-black");
  const [shadow, setShadow] = useState("shadow-sky-500")
  useEffect(() => {
    setState(getState);
  }, [getState]);

  useEffect(() => {
    if (state === 0) {
      setbgColor("bg-white");
      setText("text-black");
      setShadow("shadow-sky-500")
    } else if (state === 1) {
      setbgColor("bg-black");
      setText("text-white");
      setShadow("shadow-purple-500")
    }
  }, [state]);
  return (
    <>
      <div className={`inline-block p-4 m-2 shadow-xl rounded-xl ${shadow} ${bgColor}`}>
        <div>
          <p className={`font-bold ${text}`}>Tests Upcoming</p>
        </div>
        <div className="grid grid-cols-1 gap-12 p-2 w-64">
          <div
            className={`${myList.at(
              0
            )} h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-pink-600 hover:shadow-pink-700 hover:cursor-pointer`}
          >
            <div className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"></div>
            <p className="z-10 font-bold text-white">Test1</p>
          </div>
          <div
            className={`${myList.at(
              1
            )} h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-red-500 hover:shadow-red-600 hover:cursor-pointer`}
          >
            <div className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"></div>
            <p className="z-10 font-bold text-white">Test2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestUpcoming;
