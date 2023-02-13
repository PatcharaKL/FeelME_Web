// FeelThem
import { useState } from "react";
import { FeelMeLogo } from "../FeelMeLogo";
import { icons } from "../../assets/icons";
import { SvgIconComponent } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSelectedItem } from "../../features/sidebar-selection/sidebarSelectionSlice";
import { SideBarItemType } from "./type";
import { SideBarItem } from "./SideBarItem";

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
  const sidebarItems = sidebarItemList.map((item) => (
    <SideBarItem key={item.id} {...item} />
  ));
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
      className="text-center transition duration-100 ease-in-out hover:scale-105 active:scale-100"
    >
      <Logo />
    </a>
  );
};

export default SideBar;
