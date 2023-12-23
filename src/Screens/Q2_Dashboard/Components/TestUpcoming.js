import { useEffect, useState } from "react";
import TestInfoModal from "./ModalTestInfo";
import { GetUpcomingTestHandler } from "../../../Firebase/UpcomigTestHandler";

const TestUpcoming = ({ getState }) => {
  let myList = ["bg-pink-600", "bg-red-500", "bg-pink-400", "bg-orange-500"];
  const [state, setState] = useState(getState);
  const [bgColor, setbgColor] = useState("bg-white");
  const [text, setText] = useState("text-black");
  const [shadow, setShadow] = useState("shadow-sky-500");
  const [tests, setTests] = useState([]);

  const [Modal, ShowModal] = useState(false);
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

  useEffect(() => {
    const getUpcomingTests = async () => {
      const tests = await GetUpcomingTestHandler();
      if (tests === undefined) {
        tests = ["No Upcoming Tests"];
        setTests(tests);
      }
      setTests(tests);
    };
    getUpcomingTests();
  }, []);

  const activateModal = () => {
    if (Modal === false) {
      ShowModal(true);
    } else {
      ShowModal(false);
    }
  };
  return (
    <>
      <div
        className={`inline-block p-4 m-2 shadow-xl rounded-xl ${shadow} ${bgColor} z-50`}
      >
        <div>
          <p className={`font-bold ${text}`}>Tests Upcoming</p>
        </div>
        <div className="grid grid-cols-1 gap-12 p-2 w-64">
          {tests.length === 0 ? (
            <div
              className={`${myList.at(
                1
              )} h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-red-500 hover:shadow-red-600 hover:cursor-pointer`}
            >
              <div
                className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"
                onClick={() => activateModal()}
              ></div>
              <p className="font-bold text-white">No upcoming tests</p>
            </div>
          ) : (
            tests.map((test, index) => (
              <div
                key={index}
                className={`${myList.at(
                  1
                )} h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-red-500 hover:shadow-red-600 hover:cursor-pointer`}
              >
                <div
                  className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"
                  onClick={() => activateModal()}
                ></div>
                <p className="font-bold text-white">{test.tests}</p>
              </div>
            ))
          )}
        </div>

        <div>{Modal && <TestInfoModal modalOpen={ShowModal} />}</div>
      </div>
    </>
  );
};

export default TestUpcoming;
