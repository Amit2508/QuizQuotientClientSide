import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import MarkSection from "./Components/MarksSection";
import ResultTable from "./Components/ResultTable";
import { Check_Result_test } from "../../Firebase/UpcomigTestHandler";
import { useLocation } from "react-router-dom";
const QuizResult = () => {
  let stateVal = localStorage.getItem("web_state");
  stateVal === null ? (stateVal = 0) : (stateVal = stateVal);
  const [state, setState] = useState(parseInt(stateVal));
  const [background, setBackGround] = useState("bg-white");
  const [marks, setMarks] = useState([]);

  const updateState = (state) => {
    if (state === 0) {
      setState(1);
    }
    if (state === 1) {
      setState(0);
    }
  };
  const location = useLocation();
  const test_id = location.state;
  useEffect(()=>{
    const get_marks_rank = async() =>{
      const data = await Check_Result_test(test_id);
      const mark = data[0];
      setMarks(mark);
    }
    get_marks_rank();
  },[])

  useEffect(() => {
    state === 0 ? setBackGround("bg-white") : setBackGround("bg-slate-800");
  }, [state]);
  return (
    <>
      <div className={`${background} h-screen`}>
        <div>
          <Navbar updateState={updateState} />
        </div>
        <div className={`flex sm:flex sm:flex-row flex-col justify-evenly items-center`}>
          <div className={`w-full`}>
            <MarkSection state={state} marks={marks}/>
          </div>
          <div className={`w-full`}>
            <ResultTable state={state}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizResult;
