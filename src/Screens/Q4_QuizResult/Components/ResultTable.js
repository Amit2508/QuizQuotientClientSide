import { useEffect, useState } from "react";

const ResultTable = ({ state, rank }) => {
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

  const generateRankList = () => {
    if (rank.length === 0) {
      return (
        <div className={`${textcColor} font-bold`}>Rank not declared</div>
      );
    }

    return rank.map((item, index) => (
      <div
        key={index}
        className={`grid grid-cols-5 border-b ${borderColor} ${textcColor} p-2`}
      >
        <p className="overflow-auto">{item.id}</p>
        <p>{item.marks}</p>
        <p>{item.timeDifferenceInSeconds}</p>
        <p>{index + 1}</p>
        <p>{item.type}</p>
      </div>
    ));
  };

  return (
    <>
      <div className={`p-4`}>
        <div className={`${backgroundColor} shadow-xl shadow-blue-400`}>
          <div
            className={`grid grid-cols-5 border ${borderColor} rounded-t-lg ${textcColor} font-bold`}
          >
            <p>Name</p>
            <p>Marks</p>
            <p>Time</p>
            <p>Rank</p>
            <p>Type</p>
          </div>
          <div className={`border ${borderColor} overflow-auto h-96`}>
            {generateRankList()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultTable;
