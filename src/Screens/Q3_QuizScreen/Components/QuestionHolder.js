import React, { useEffect, useState } from "react";

const QuestionHolder = ({
  state,
  selected,
  QuestionDetails,
  option,
  onOptionChange,
}) => {
  // State for text color
  const [text, setText] = useState("text-white");

  // State for background color
  const [background, setBackGround] = useState("bg-white");
  // State for selected option
  const [marked, setMarked] = useState(false);
  const [action, setAction] = useState("Mark");
  const [Question, setQuestion] = useState("");
  const [Option, setOption] = useState([]);
  const optionHandler = option[selected - 1] || "";
  // useEffect to update styles based on the state
  useEffect(() => {
    if (state === 0) {
      // Light mode styles
      setText("text-black");
      setBackGround("bg-white");
    } else {
      // Dark mode styles
      setText("text-white");
      setBackGround("bg-slate-800");
    }
  }, [state]);

  // Function to handle option selection
  const handleOptionChange = (index) => {
    onOptionChange(selected - 1, index);
  };

  // Function to clear selected option
  const clearSelection = () => {
    handleOptionChange(0);
  };

  const handleReviewButton = () => {
    if (marked === true) {
      setAction("Mark");
      setMarked(false);
    } else {
      setMarked(true);
      setAction("Unmark");
    }
  };
  useEffect(() => {
    if (selected !== null && selected !== Object) {
      setQuestion(QuestionDetails.valQuestion);
      const data = [];
      data.push(QuestionDetails.v_o1);
      data.push(QuestionDetails.v_o2);
      data.push(QuestionDetails.v_o3);
      data.push(QuestionDetails.v_o4);
      setOption(data);
    }
  }, [selected]);

  return (
    <>
      {/* Container with dynamic background color */}
      <div
        className={`${background} m-4 p-4 rounded-md shadow-xl shadow-blue-300`}
      >
        <div>
          {selected !== null || selected !== Object ? (
            <div>
              <div>
                {/* Question title with dynamic text color */}
                <p className={`${text} text-lg font-bold`}>
                  Question-{selected}
                </p>
              </div>
              <div className={`${text}`}>{Question}</div>
              <div>
                {/* Question details with dynamic text color */}
                <p className={`${text}`}>Select the correct answer:</p>
              </div>
              {/* Options with radio buttons */}
              <div>
                {Option.map((option, index) => (
                  <label key={option} className="flex items-center">
                    <button
                      className={`${text} bg-yellow-700 p-2 m-2`}
                      onClick={() => handleOptionChange(index + 1)}
                    >
                      {option}
                    </button>
                  </label>
                ))}
              </div>
              {/* Clear button to reset selected option */}
              <button
                className={`mt-4 py-2 px-4 m-2 ${text} ${background} border border-green-200 rounded`}
                onClick={clearSelection}
              >
                Clear Selection
              </button>
              <button
                className={`mt-4 py-2 px-4 m-2 ${text} ${background} border border-green-200 rounded`}
                onClick={handleReviewButton}
              >
                {action}
              </button>
              {/* Display selected option */}

              <p className={`mt-2 ${text}`}>
                Selected Option:{" "}
                {optionHandler}
              </p>
              <div>
                <button
                  className={`mt-4 py-2 px-4 m-2 ${text} ${background} border border-green-200 rounded`}
                >
                  Previous
                </button>
                <button
                  className={`mt-4 py-2 px-4 m-2 ${text} ${background} border border-green-200 rounded`}
                >
                  Save&Next
                </button>
              </div>
            </div>
          ) : (
            <div className={`${text}`}>No Question Selected</div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionHolder;
