// FeelThem

import { FeelMeLogo } from "../FeelMeLogo";
import { icons } from "../../assets/icons";

import { SideBarItemType } from "./type";
import { SideBarItem } from "./SideBarItem";
import { SideBarContainer, SideBarItemsGroup, SideBarLogo } from "./SideBar";

const avatar = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-16 w-16 rounded-full bg-violet-700"></div>
      <div>
        <div className="text-lg font-semibold">Patchara K.</div>
        <div className="text-sm">Fullstack Dev..</div>
      </div>
    </div>
  );
};

const RightSideBar = () => {
  return (
    <>
      <SideBarContainer className="w-18 flex h-full flex-col gap-12 rounded-xl px-4 pt-6">
        <SideBarItemsGroup className="flex justify-center">
          <SideBarLogo Logo={avatar} />
        </SideBarItemsGroup>
        <SideBarItemsGroup className="flex flex-1 flex-col gap-2">
          {}
        </SideBarItemsGroup>
      </SideBarContainer>
    </>
  );
};

export default RightSideBar;
