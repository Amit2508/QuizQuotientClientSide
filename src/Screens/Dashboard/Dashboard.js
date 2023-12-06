import Navbar from "./Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import TestGiven from "./Components/TestGiven";
import TestUpcoming from "./Components/TestUpcoming";
import Footer from "./Components/Footer";
const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <SubNavbar />
      </div>
      <div
        className="flex flex-col sm:flex sm:flex-row flex-grow"
        style={{
          background: "linear-gradient(to bottom, #e0f2fe 50%, white 50%)",
        }}
      >
        <div className="flex-grow">
          <TestGiven />
        </div>
        <div className="flex-grow">
          <TestUpcoming />
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};
export default Dashboard;
