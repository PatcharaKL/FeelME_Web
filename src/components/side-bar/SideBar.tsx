// FeelThem
import { useState } from "react";
import { FeelMeLogo } from "../FeelMeLogo";
import { icons } from "../../assets/icons";
import { SvgIconComponent } from "@mui/icons-material";

const default_nav = "#";

const SideBar = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <SideBarContainer className="flex h-full w-56 flex-col gap-12 rounded-xl ">
        <SideBarItemsGroup className="flex justify-center">
          <SideBarLogo Logo={FeelMeLogo} />
        </SideBarItemsGroup>
        <SideBarItemsGroup className="flex flex-1 flex-col gap-3">
          <SideBarItem icon={icons.dashboard} name="Dashboard" />
          <SideBarItem icon={icons.diversity} name="Employees" />
          <SideBarItem icon={icons.setting} name="Setting" />
        </SideBarItemsGroup>
        <SideBarItemsGroup className="flex flex-col">
          <SideBarItem icon={icons.logout} name="Logout" />
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
  icon: Icon = icons.default,
  name,
  to = default_nav,
  selected = false,
}: SideBarItemProps) => {
  return (
    <button
      className={`${
        selected && "bg-violet-800 text-white"
      } group/button rounded-md text-center text-lg font-normal text-gray-600 transition duration-75 ease-in-out hover:scale-105 hover:bg-gray-300 hover:text-violet-600 active:scale-100`}
    >
      <span className="flex gap-5 px-7 py-2">
        <Icon />
        {name}
      </span>
    </button>
  );
};

interface SideBarItemProps {
  name: string;
  icon?: SvgIconComponent;
  to?: string;
  selected?: boolean;
}

export default SideBar;
