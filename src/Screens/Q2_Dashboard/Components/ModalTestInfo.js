import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const TestInfoModal = ({ modalOpen, TestDetails }) => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("");
  const [st, setSt] = useState("");
  const [et, setEt] = useState("");
  const [date, setDate] = useState("");
  const handleNavigation = () => {
    const check = check_date_and_time(st, et, date);
    if (check === false) {
      alert("Test not started yet");
    } else {
      const questions = parseInt(totalQuestions);
      let arr = {};
      for (let i = 0; i < questions; i++) {
        arr[i] = 5;
      }
      const data = JSON.stringify(arr);
      localStorage.setItem("Answer", data);
      localStorage.setItem("duration", duration);
      Navigate("/quiz", { state: { name } });
    }
  };
  useEffect(() => {
    const r_data = JSON.parse(TestDetails);
    if (typeof r_data === json) {
      const data = r_data;
      setName(data.test);
      setTotalQuestions(data.questions);
      setDuration(data.duration);
      setTopic(data.name);
      setSt(data.st);
      setEt(data.ed);
      setDate(data.date);
    } else {
      try {
        const data = typeof r_data === "string" ? JSON.parse(r_data) : r_data;
        setName(data.test);
        setTotalQuestions(data.questions);
        setDuration(data.duration);
        setTopic(data.name);
        setSt(data.st);
        setEt(data.ed);
        setDate(data.date);
      } catch (error) {
        alert("Some error occured dont click this again!!!!");
      }
    }
  }, []);

  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500 p-2">
          <div className="bg-blue-200 p-4 rounded-lg shadow-xl max-h-full overflow-y-auto">
            <button
              onClick={() => modalOpen(false)}
              className="flex bg-gray-100 p-1 rounded-sm font-bold"
            >
              X
            </button>
            <div className={`m-2 p-2`}>
              <p className={`font-bold`}>{name}</p>
            </div>
            <div className={`m-2 p-2`}>
              <p className={``}>Read the instructions carefully</p>
            </div>
            <div className={`m-2 p-2`}>
              <div>
                <p className={``}>Number of questions - {totalQuestions}</p>
                <p className={``}>Total Time - {duration} minutes</p>
                <p className={``}>Type - Objective</p>
                <p className={``}>Topics -{topic}</p>
              </div>
            </div>
            <div className={`m-2 p-2`}>
              <div className={`m-2 p-2`}>
                <p className={`font-bold`}>Test Date & Time: {date} </p>
                <p className={`font-bold`}>
                  {st} to {et}{" "}
                </p>
              </div>

              <div
                className="bg-blue-600 m-2 p-1 block rounded-lg cursor-pointer hover:bg-blue-400"
                onClick={() => handleNavigation()}
              >
                <p className="text-white">Enroll Now</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TestInfoModal;

function check_date_and_time(st, et, date) {
  const startTime = new Date(`1970-01-01T${st}`);
  const endTime = new Date(`1970-01-01T${et}`);
  const inputDateTime = new Date(`${date}T00:00:00`);
  return inputDateTime >= startTime && inputDateTime <= endTime;
}
