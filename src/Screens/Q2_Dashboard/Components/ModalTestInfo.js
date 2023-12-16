const TestInfoModal = ({ modalOpen }) => {
  return (
    <>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500 p-2">
          <div className="bg-blue-200 p-4 rounded-lg shadow-xl max-h-full overflow-y-auto">
            <button
              onClick={() => modalOpen(false)}
              className="flex bg-gray-100 p-1 rounded-sm font-bold"
            >
              X
            </button>
            <div className={`m-2 p-2`}>
              <p className={`font-bold`}>Test-1</p>
            </div>
            <div className={`m-2 p-2`}>
              <p className={``}>Read the instructions carefully</p>
            </div>
            <div className={`m-2 p-2`}>
              <div>
                <p className={``}>Number of questions - 20</p>
                <p className={``}>Total Time - 60 minutes</p>
                <p className={``}>Type - Objective</p>
                <p className={``}>Topics - X Y Z</p>
              </div>
            </div>
            <div className={`m-2 p-2`}>

            <div className={`m-2 p-2`}>
              <p className={`font-bold`}>Test Date & Time - 14th January 2023 </p>
              <p className={`font-bold`}>2:30 pm to 3:30 pm </p>
            </div>
                
            <div
              className="bg-blue-600 m-2 p-1 block rounded-lg cursor-pointer hover:bg-blue-400"
            >
              <p className="text-white">Enroll Now</p>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TestInfoModal;
