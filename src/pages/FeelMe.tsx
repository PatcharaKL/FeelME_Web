import SideBar from "../components/side-bar/SideBar";
const FeelMe = () => {
  return (
    <>
      <div className="h-screen w-screen p-6">
        <div className="flex h-full gap-6">
          <SideBar />
          <h1 className="flex-1 rounded-xl bg-cyan-100">FeelMe Dashboard</h1>
        </div>
      </div>
    </>
  );
};
export default FeelMe;
