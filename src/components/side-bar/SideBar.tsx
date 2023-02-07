import { FeelMeLogo } from "../FeelMeLogo";

const default_nav = "#";

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <div className="overflow h-full px-3 py-4">
          <div className="flex justify-center pb-4">
            <SideBarLogo Logo={FeelMeLogo} />
          </div>
          <SideBarItem name="Dashboard" />
          <SideBarItem name="Employees" />
        </div>
      </SideBarContainer>
    </>
  );
};

const SideBarContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <aside {...props} className="h-full w-64 rounded-xl">
      {props.children}
    </aside>
  );
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
      <a className="text-center text-lg text-gray-900" href={to}>
        {name}
      </a>
    </div>
  );
};
export default SideBar;
