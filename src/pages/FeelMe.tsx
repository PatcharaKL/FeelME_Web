import SideBar from "../components/side-bar/SideBar";
const FeelMe = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 p-6">
        <div className="flex h-full gap-6">
          <SideBar />
          <div className="flex-1 rounded-xl bg-cyan-100"></div>
        </div>
      </div>
    </>
  );
};
export default FeelMe;
