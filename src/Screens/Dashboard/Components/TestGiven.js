const TestGiven = () => {
  let myList = ["bg-blue-600", "bg-red-500", "bg-pink-400", "bg-orange-500"];
  return (
    <>
      <div className="inline-block p-4 m-2 shadow-2xl shadow-sky-500 rounded-xl bg-white">
        <div>
          <p className="font-bold">Tests Given</p>
        </div>
        <div className="grid grid-cols-2 gap-12 p-2">
          <div
            className={`${myList.at(
              0
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-blue-600 hover:shadow-blue-700 hover:cursor-pointer`}
          >
            <div className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"></div>
            <p className="z-10 font-bold text-white">Test1</p>
          </div>
          <div
            className={`${myList.at(
              1
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-red-500 hover:shadow-red-600 hover:cursor-pointer`}
          >
            <div className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"></div>
            <p className="z-10 font-bold text-white">Test2</p>
          </div>
          <div
            className={`${myList.at(
              2
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-pink-400 hover:shadow-pink-500 hover:cursor-pointer`}
          >
            <div className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"></div>
            <p className="z-10 font-bold text-white">Test3</p>
          </div>
          <div
            className={`${myList.at(
              3
            )} w-32 h-32 flex items-center justify-center shadow-lg rounded-xl relative shadow-orange-500 hover:shadow-orange-600 hover:cursor-pointer`}
          >
            <div className="absolute inset-0 bg-opacity-50 bg-gray-500 rounded-xl"></div>
            <p className="z-10 font-bold text-white">Test4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestGiven;
