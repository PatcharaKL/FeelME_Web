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
          ? "bg-violet-100 text-violet-800 shadow-md shadow-violet-200 hover:bg-violet-100 hover:text-violet-800"
          : "hover:text-violet-800"
      } group/unselected text-md mx-3 rounded-lg text-center font-medium text-gray-700 transition duration-75 ease-in-out hover:scale-105  active:scale-100`}
      onClick={() => dispatch(setSelectedItem(id))}
    >
      <span className="flex select-none gap-4 px-4 py-2">
        <Icon
        // className={`${
        //   selectedID == id ? "text-violet-800" : "text-violet-500"
        // }`}
        />
        {name}
      </span>
    </button>
  );
};
