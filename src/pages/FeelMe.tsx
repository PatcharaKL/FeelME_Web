import SideBar from "../components/side-bar/SideBar";
const FeelMe = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-white to-violet-100 p-4">
        <div className="flex h-full gap-6">
          <SideBar />
          <div
            id="board"
            className="flex flex-1 animate-pulse flex-col justify-center overflow-hidden rounded-md bg-gray-500 text-center font-mono text-6xl font-black text-white drop-shadow-lg"
          >
            <div>LOADING...</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeelMe;
