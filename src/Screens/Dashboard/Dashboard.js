import Navbar from "./Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import TestGiven from "./Components/TestGiven";
import TestUpcoming from "./Components/TestUpcoming";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [darknessState, setDarknessState] = useState(0);
  const [testColor, setTestColor] = useState(
    "linear-gradient(to bottom, #e0f2fe 50%, white 50%)"
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
        setTestColor("linear-gradient(to bottom, #0c4a6e 50%, #1e293b 50%)");
        setBgColor("bg-slate-800");
      }
      if (darknessState === 0) {
        setTestColor("linear-gradient(to bottom, #e0f2fe 50%, white 50%)");
        setBgColor("bg-white");
      }
    };

    setColors();
  }, [darknessState]);
  return (
    <div className={`flex flex-col min-h-screen ${bgColor}`}>
      <div>
        <Navbar updateState={updateState} />
      </div>
      <div>
        <SubNavbar getState={darknessState} />
      </div>
      <div
        className="flex flex-col sm:flex sm:flex-row flex-grow"
        style={{
          background: testColor,
        }}
      >
        <div className="flex-grow">
          <TestGiven getState={darknessState}/>
        </div>
        <div className="flex-grow">
          <TestUpcoming getState={darknessState} />
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};
export default Dashboard;
