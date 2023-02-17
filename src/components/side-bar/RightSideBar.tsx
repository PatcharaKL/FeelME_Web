// FeelThem

import React from "react";
import { images } from "../../assets/images";
import {
  SideBarContainer,
  SideBarItemsGroup,
  SideBarLogo,
  SideBarButton,
} from "./SideBar";
import { icons } from "../../assets/icons";
import { SvgIconComponent } from "@mui/icons-material";

const avatar = () => {
  const name = "Patchara K.";
  const position = "Fullstack Dev.";
  const AvatarImage = () => {
    return (
      <img
        className="rounded-full"
        src={images.avatarImage}
        alt="user avatar"
      />
    );
  };
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-16 w-16">
        <AvatarImage />
      </div>
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm">{position}</div>
      </div>
    </div>
  );
};

const IconWrapper = (icon: SvgIconComponent): JSX.Element => {
  return (
    <div className="flex h-12 w-12 items-center justify-center">
      {React.createElement(icon, { className: "w-fit h-fit text-violet-800" })}
    </div>
  );
};

const RightSideBar = () => {
  return (
    <>
      <SideBarContainer className="flex h-full w-fit flex-col gap-12 rounded-xl py-6 px-2 pt-6">
        <SideBarItemsGroup className="flex justify-center">
          <SideBarLogo Logo={avatar} />
        </SideBarItemsGroup>
        <SideBarItemsGroup className="flex flex-1 flex-col items-center justify-end gap-8">
          <SideBarButton icon={() => IconWrapper(icons.message)} />
          <SideBarButton icon={() => IconWrapper(icons.notification)} />
        </SideBarItemsGroup>
      </SideBarContainer>
    </>
  );
};

export default RightSideBar;
