import { FeelMeLogo } from "../FeelMeLogo";

const default_nav = "#";

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <SideBarLogo Logo={FeelMeLogo} />
        <SideBarItem name="Dashboard" />
        <SideBarItem name="Employees" />
      </SideBarContainer>
    </>
  );
};

const SideBarContainer = (props: any) => {
  return <div className="bg-teal-600">{props.children}</div>;
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
    <div>
      <a className="text-lg" href={to}>
        {name}
      </a>
    </div>
  );
};
export default SideBar;
