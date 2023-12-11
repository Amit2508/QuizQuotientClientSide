import userPhoto from "../Icons/profile.png";
import bright from "../Icons/brightness.png";
import night from "../Icons/night.png";
import {useEffect, useState } from "react";

const Navbar = ({ updateState }) => {
  let get_darknessState = localStorage.getItem("web_state");
  if (get_darknessState === null) {
    get_darknessState = 0;
  }
  const [darknessState, setDarknessState] = useState(
    parseInt(get_darknessState)
  );
  const [imageSet, setImageSet] = useState(bright);
  const [backGroundColor, setBackGroundColor] = useState("bg-white");
  const [text, setText] = useState("text-black");

  const handleLightClickListener = () => {
    const newDarknessState = updateState(darknessState === 0 ? 1 : 0);
    updateState(newDarknessState);
    if (darknessState === 0) {
      localStorage.setItem("web_state", JSON.stringify(0));
      setDarknessState(1);
      setImageSet(bright);
      setBackGroundColor("bg-white");
      setText("text-black");
    } else {
      localStorage.setItem("web_state", JSON.stringify(1));
      setDarknessState(0);
      setImageSet(night);
      setBackGroundColor("bg-slate-800");
      setText("text-white");
    }
  };

  useEffect(() => {
    if (darknessState === 0) {
      localStorage.setItem("web_state", JSON.stringify(0));
      setDarknessState(1);
      setImageSet(bright);
      setBackGroundColor("bg-white");
      setText("text-black");
    } else {
      localStorage.setItem("web_state", JSON.stringify(1));
      setDarknessState(0);
      setImageSet(night);
      setBackGroundColor("bg-slate-800");
      setText("text-white");
    }
  }, []);

  return (
    <>
      <div className={`flex p-4 items-center ${backGroundColor}`}>
        <div>
          <p className="text-blue-500 font-bold text-lg sm:text-2xl">
            QuizQuotient
          </p>
        </div>
        <div className="ml-auto flex space-x-2 p-2 items-center text-sm sm:space-x-8 sm:text-lg">
          <p className={`${text} font-bold cursor-pointer`}>Home</p>
          <p className={`${text} font-bold cursor-pointer`}>Settings</p>
          <img src={userPhoto} alt={``} className="w-8 h-8 cursor-pointer" />
          <img
            src={imageSet}
            alt={``} 
            className="w-8 h-8 cursor-pointer"
            onClick={() => handleLightClickListener()}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
