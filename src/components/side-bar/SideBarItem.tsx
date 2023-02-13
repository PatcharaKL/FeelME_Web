import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { icons } from "../../assets/icons";
import { setSelectedItem } from "../../features/sidebar-selection/sidebarSelectionSlice";
import { SideBarItemType } from "./type";

const default_nav = "#";

export const SideBarItem = ({
  id,
  icon: Icon = icons.default,
  name,
  to = default_nav,
}: SideBarItemType) => {
  const dispatch = useAppDispatch();
  const selectedID = useAppSelector(
    (state) => state.sidebarSelection.selectedItemID
  );
  return (
    <button
      className={`${
        selectedID == id
          ? "bg-violet-800 text-white hover:bg-violet-800 hover:text-white"
          : "hover:bg-violet-100 hover:text-violet-600"
      } group/unselected rounded-md text-center text-lg font-normal text-gray-600 transition duration-75 ease-in-out hover:scale-105  active:scale-100`}
      onClick={() => dispatch(setSelectedItem(id))}
    >
      <span className="flex select-none gap-5 px-7 py-2">
        <Icon />
        {name}
      </span>
    </button>
  );
};
