import Navbar from "./Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import TestGiven from "./Components/TestGiven";
import TestUpcoming from "./Components/TestUpcoming";
const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <SubNavbar />
      </div>
      <div className="flex flex-col sm:justify-evenly bg-sky-100 h-32 sm:flex sm:flex-row">
        <div>
          <TestGiven />
        </div>
        <div>
          <TestUpcoming />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
