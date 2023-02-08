import SideBar from "../components/side-bar/SideBar";
const FeelMe = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-white to-violet-100 p-4">
        <div className="flex h-full gap-6">
          <SideBar />
          <div
            id="board"
            className="flex-1 overflow-hidden rounded-md bg-white drop-shadow-sm"
          ></div>
        </div>
      </div>
    </>
  );
};
export default FeelMe;
