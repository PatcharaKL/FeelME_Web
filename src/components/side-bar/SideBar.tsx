import { useState } from "react";
import { FeelMeLogo } from "../FeelMeLogo";

const default_nav = "#";

const SideBar = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <SideBarContainer className="flex h-full w-64 flex-col gap-16 rounded-xl ">
        <SideBarItemsGroup className="flex justify-center">
          <SideBarLogo Logo={FeelMeLogo} />
        </SideBarItemsGroup>
        <SideBarItemsGroup className="flex flex-1 flex-col gap-3">
          <SideBarItem name="Dashboard" />
          <SideBarItem name="Employees" />
        </SideBarItemsGroup>
        <SideBarItemsGroup className="">
          <SideBarItem name="Logout" />
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
    <a href={to}>
      <Logo />
    </a>
  );
};

const SideBarItem = ({ name, to = default_nav }: any) => {
  return (
    <div className="flex gap-5   px-7 py-2">
      <div className=" h-auto w-7 rounded-full bg-slate-600"></div>
      <a className="text-center text-lg font-semibold text-gray-900" href={to}>
        {name}
      </a>
    </div>
  );
};

export default SideBar;
