import { useGetEmployeesQuery } from "../../services/feelme_api";
import SearchIcon from "@mui/icons-material/Search";

export const Employees = () => {
  const { data: employees, isLoading, isSuccess } = useGetEmployeesQuery({});
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="grid grid-cols-4 gap-5">
        {!isLoading &&
          isSuccess &&
          employees.map((employee: Employees) => (
            <EmployeesCard
              key={employee.id}
              id={employee.id}
              name={employee.name}
              avatarURL={employee.avatarURL}
              position={employee.position}
              hp={employee.hp}
            />
          ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex h-fit w-full justify-between rounded-lg bg-violet-50 py-4 px-10">
      <h1 className="text-4xl font-bold text-violet-900">Employees</h1>
      <label className="relative block w-[40%] self-end">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="text-violet-500" />
        </span>
        <input
          type="text"
          className="w-full rounded-lg border border-violet-300 py-2 pl-9 pr-3 placeholder-violet-500 ring-violet-500 focus:outline-none focus:ring-1"
          placeholder="Search for employees.."
        ></input>
      </label>
    </div>
  );
};
interface Employees {
  id: number;
  hp: number;
  name: string;
  avatarURL: string;
  position: string;
}
const EmployeesCard = ({ id, hp, name, avatarURL, position }: Employees) => {
  const Overlay = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-red-400/20 ring-2 ring-red-600/50"></div>
    );
  };
  return (
    <div className="relative">
      {hp <= 0 && <Overlay />}
      <div className="flex h-fit w-64 flex-col items-center gap-3 overflow-hidden rounded-lg bg-violet-50 px-4 py-8 text-center shadow-lg shadow-violet-100">
        <HealthBar hp={hp} />
        <CardImage avatarURL={avatarURL}></CardImage>
        <div className="w-full">
          <p className="truncate text-xl font-bold">{name}</p>
          <p className="truncate">{position}</p>
        </div>
      </div>
    </div>
  );
};

const CardImage = ({ avatarURL }: any) => {
  return (
    <>
      <img
        className="h-48 w-48 rounded-full object-scale-down ring-4 ring-emerald-300"
        src={avatarURL}
      ></img>
    </>
  );
};

const HealthBar = ({ hp }: { hp: number }) => {
  const calHpColor = () => {
    if (hp <= 20) {
      return "#E11D48";
    }
    if (hp <= 50) {
      return "#FBBF24";
    }
    if (hp <= 100) {
      return "#22C55E";
    }
    return "#303030";
  };

  const hp_style = {
    width: hp + "%",
    backgroundColor: calHpColor(),
  };

  return (
    <div className="w-full">
      <div className="text-md font-semibold">
        HP: <span className="text-violet-700">{hp}/100</span>
      </div>
      <div className="flex h-4 flex-col items-start justify-center rounded-md bg-violet-200">
        <div className={`h-2 w-10/12 rounded-md`} style={hp_style}></div>
      </div>
    </div>
  );
};
