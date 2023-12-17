import { useEffect, useState } from "react";

const QuestionHolder = ({ questionID, state }) => {
  const [text, setText] = useState("text-white");
  const [background, setBackGround] = useState("bg-white")
  useEffect(()=>{
    if(state === 0){
        setText('text-black');
        setBackGround('bg-white')
    }else{
        setText('text-white');
        setBackGround('bg-slate-800')
    }
  },[state])
  return (
    <>
      <div className={`${background}`}>
        <div>
          <p className={`${text}`}>{questionID}</p>
        </div>
        <div>
            <p className={`${text}`}>This is details about, ${questionID}</p>
        </div>
      </div>
    </>
  );
};
