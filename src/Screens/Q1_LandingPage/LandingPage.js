import Navbar from "../Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import Footer from "../Components/Footer";
import {useEffect, useState } from "react";
const LandingPage = () => {
  let get_darknessState = localStorage.getItem("web_state");
  if (get_darknessState === null) {
    get_darknessState = 0;
  }

  const [darknessState, setDarknessState] = useState(
    parseInt(get_darknessState)
  );
  const [bgColor, setBgColor] = useState("bg-white");

  const updateState = (state) => {
    if (state === 0) {
      setDarknessState(1);
    }
    if (state === 1) {
      setDarknessState(0);
    }
  };

  useEffect(() => {
    const setColors = () => {
      if (darknessState === 1) {
        setBgColor("bg-slate-800");
      }
      if (darknessState === 0) {
        setBgColor("bg-white");
      }
    };

    setColors();
  }, [darknessState]);
  return (
    <>
      <div className={`${bgColor}`}>
        <div>
          <Navbar updateState={updateState} />
        </div>
        <div>
          <SubNavbar getState={darknessState} />
        </div>
        <div className="">
          <Footer/>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
