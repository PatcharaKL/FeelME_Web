// FeelThem
import { useState } from "react";
import { FeelMeLogo } from "../FeelMeLogo";
import { icons } from "../../assets/icons";
import { SvgIconComponent } from "@mui/icons-material";

const default_nav = "#";

const SideBar = () => {
  const [selected, setSelected] = useState("");
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
        <SideBarItemsGroup className="">
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
}: SideBarItemProps) => {
  return (
    <a className="text-center text-lg font-normal text-gray-900" href={to}>
      <span className="flex gap-5 px-7 py-2">
        <Icon />
        {name}
      </span>
    </a>
  );
};

interface SideBarItemProps {
  name: string;
  icon?: SvgIconComponent;
  to?: string;
}

export default SideBar;
