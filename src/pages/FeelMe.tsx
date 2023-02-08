import SideBar from "../components/side-bar/SideBar";
const FeelMe = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-r from-white to-gray-100 p-6">
        <div className="flex h-full gap-6">
          <SideBar />
          <div
            id="board"
            className="flex-1 rounded-xl bg-white drop-shadow-xl"
          ></div>
        </div>
      </div>
    </>
  );
};
export default FeelMe;
