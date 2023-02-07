import { FeelMeLogo } from "../FeelMeLogo";

const default_nav = "#";

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <div className="overflow h-full bg-gray-300 px-3 py-4">
          <SideBarLogo Logo={FeelMeLogo} />
          <ul className="space-y-2">
            <li>
              <SideBarItem name="Dashboard" />
            </li>
            <li>
              <SideBarItem name="Employees" />
            </li>
          </ul>
        </div>
      </SideBarContainer>
    </>
  );
};

const SideBarContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <aside
      {...props}
      className="top-0 left-0 z-40 h-screen w-64 "
      aria-label="Sidebar"
    >
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
      <a className="text-center text-lg text-gray-600" href={to}>
        {name}
      </a>
    </div>
  );
};
export default SideBar;
