// FeelThem
import { useState } from "react";
import { FeelMeLogo } from "../FeelMeLogo";
import { icons } from "../../assets/icons";
import { SvgIconComponent } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSelectedItem } from "../../features/sidebar-selection/sidebarSelectionSlice";

const default_nav = "#";

const sidebarItemList: SideBarItemType[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: icons.dashboard,
  },
  {
    id: 2,
    name: "Employees",
    icon: icons.diversity,
  },
  {
    id: 3,
    name: "Setting",
    icon: icons.setting,
  },
];

const SideBar = () => {
  const sidebarItems = sidebarItemList.map((item) => <SideBarItem {...item} />);
  return (
    <>
      <SideBarContainer className="flex h-full w-56 flex-col gap-12 rounded-xl ">
        <SideBarItemsGroup className="flex justify-center">
          <SideBarLogo Logo={FeelMeLogo} />
        </SideBarItemsGroup>
        <SideBarItemsGroup className="flex flex-1 flex-col gap-3">
          {sidebarItems}
        </SideBarItemsGroup>
        <SideBarItemsGroup className="flex flex-col">
          <SideBarItem id={4} icon={icons.logout} name="Logout" />
        </SideBarItemsGroup>
      </SideBarContainer>
    </>
  );
};

const SideBarContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <aside {...props}>{props.children}</aside>;
};

const SideBarItemsGroup = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{props.children}</div>;
};

const SideBarLogo = ({ Logo, to = default_nav }: any) => {
  return (
    <a
      href={to}
      className="text-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:rotate-1 hover:scale-110"
    >
      <Logo />
    </a>
  );
};

const SideBarItem = ({
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
        selectedID == id &&
        "bg-violet-800 text-white hover:bg-violet-800 hover:text-white"
      } group/unselected rounded-md text-center text-lg font-normal text-gray-600 transition duration-75 ease-in-out hover:scale-105 hover:bg-violet-100 hover:text-violet-600 active:scale-100`}
      onClick={() => dispatch(setSelectedItem(id))}
    >
      <span className="flex gap-5 px-7 py-2">
        <Icon />
        {name}
      </span>
    </button>
  );
};

interface SideBarItemType {
  id: number;
  name: string;
  icon?: SvgIconComponent;
  to?: string;
}

export default SideBar;
