import { Board } from "../components/board/Board";
import SideBar from "../components/side-bar/SideBar";
const FeelMe = () => {
  return (
    <>
      <div className="  h-screen w-screen bg-gradient-to-br to-violet-200 p-4">
        <div className="flex h-full gap-4">
          <SideBar />
          <Board />
        </div>
      </div>
    </>
  );
};
export default FeelMe;
