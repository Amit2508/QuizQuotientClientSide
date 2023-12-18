import { useEffect, useState } from "react";

const ResultTable = ({state}) => {
  const [textcColor, setTextColor] = useState("text-yellow-500");
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


  const generateRandomList = () => {
    const Name = [];
    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        Name.push(
            <div key={i} className={`grid grid-cols-5 ${textcColor}`}>
                <p>{i}</p>
                <p>Name{i}</p>
                <p>{randomNumber}</p>
                <p>{i+1}</p>
                <p>100</p>
            </div>
        )
    }
    return Name;
  };
  return (
    <>
      <div className={`p-4`}>
        <div className={`${backgroundColor} shadow-xl shadow-blue-400`}>
          <div
            className={`grid grid-cols-5 border ${borderColor} rounded-t-lg ${textcColor}`}
          >
            <p>Sno</p>
            <p>Name</p>
            <p>Marks</p>
            <p>Rank</p>
            <p>Max Marks</p>
          </div>
          <div className={`border ${borderColor} overflow-auto h-96`}>
            {generateRandomList()}
          </div>
        </div>
      </div>
    </>
  );
};
export default ResultTable;
