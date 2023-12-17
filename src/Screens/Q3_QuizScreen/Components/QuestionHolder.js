import React, { useEffect, useState } from "react";

const QuestionHolder = ({ state }) => {
  // State for text color
  const [text, setText] = useState("text-white");

  // State for background color
  const [background, setBackGround] = useState("bg-white");

  // State for selected option
  const [selectedOption, setSelectedOption] = useState(null);

  const [marked, setMarked] = useState(false);
  const [action, setAction] = useState("Mark");

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
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Function to clear selected option
  const clearSelection = () => {
    setSelectedOption(null);
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

  return (
    <>
      {/* Container with dynamic background color */}
      <div
        className={`${background} m-4 p-4 rounded-md shadow-xl shadow-blue-300`}
      >
        <div>
          {/* Question title with dynamic text color */}
          <p className={`${text} text-lg font-bold`}>Sample Question</p>
        </div>
        <div>
          {/* Question details with dynamic text color */}
          <p className={`${text}`}>Select the correct answer:</p>
        </div>
        {/* Options with radio buttons */}
        <div>
          {["Option A", "Option B", "Option C", "Option D"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              <span className={`ml-2 ${text}`}>{option}</span>
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
        {selectedOption && (
          <p className={`mt-2 ${text}`}>Selected Option: {selectedOption}</p>
        )}
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
    </>
  );
};

export default QuestionHolder;
