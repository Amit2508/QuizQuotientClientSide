import illustration1 from "../../Icons/IllustrationHome.png";

const SubNavbar = () => {
  return (
    <>
      <div className="bg-sky-100 sm:flex sm:justify-evenly sm:items-center justify-evenly items-center p-4">
        <div className="sm:flex sm:flex-col sm:items-center">
          <p className="text-2xl font-bold sm:text-6xl">Welcome!!!</p>
          <p className="text-xl font-bold sm:text-5xl">User</p>
        </div>
        <div>
          <img src={illustration1} className="w-96 h-64 sm:w-full sm:h-96" />
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
