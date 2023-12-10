import Navbar from "../Components/Navbar";
import { useState } from "react";
const LandingPage = () => {
  const [darknessState, setDarknessState] = useState(0);

  const updateState = (state) => {
    if (state === 0) {
      setDarknessState(1);
    }
    if (state === 1) {
      setDarknessState(0);
    }
  };
  return (
    <>
      <div>
        <Navbar updateState={updateState} />
      </div>
    </>
  );
};
export default LandingPage;
