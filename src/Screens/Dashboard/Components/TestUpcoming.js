const TestUpcoming = () => {
  let myList = ["bg-pink-600", "bg-red-500", "bg-pink-400", "bg-orange-500"];
  return (
    <>
      <div className="inline-block p-4 m-2 shadow-xl border border-black rounded-xl bg-white">
        <div>
          <p className="font-bold">Tests Upcoming</p>
        </div>
        <div className="grid grid-cols-1 gap-1 p-2 w-64">
          <div
            className={`${myList.at(
              0
            )} w-auto h-32 flex items-center justify-center`}
          >
            <p>Test1</p>
          </div>

          <div
            className={`${myList.at(
              1
            )}  w-auto h-32 flex items-center justify-center`}
          >
            <p>Test2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestUpcoming;
