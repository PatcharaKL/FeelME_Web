import SideBar from "../components/side-bar/SideBar";
const FeelMe = () => {
  return (
    <>
      <div className="fixed w-screen p-4">
        <div className="flex">
          <SideBar />
          <h1 className="flex-1 bg-sky-300 text-center">FeelMe Dashboard</h1>
        </div>
      </div>
    </>
  );
};
export default FeelMe;
