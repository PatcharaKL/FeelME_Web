import { useGetEmployeesQuery } from "../../services/feelme_api";

export const Employees = () => {
  const { data: employees, isLoading, isSuccess } = useGetEmployeesQuery({});
  return (
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
  return (
    <>
      <div className="flex h-fit w-64 flex-col items-center gap-3 overflow-hidden rounded-2xl bg-violet-50 px-4 py-8 text-center shadow-lg shadow-violet-100">
        <HealthBar hp={hp} />
        <img
          className="h-48 w-48 rounded-full object-scale-down ring-4 ring-violet-300"
          src={avatarURL}
        ></img>
        <div className="w-full">
          <p className="truncate text-xl font-bold">{name}</p>
          <p className="truncate">{position}</p>
        </div>
      </div>
    </>
  );
};

const HealthBar = ({ hp }: { hp: number }) => {
  return (
    <>
      <div className="text-xl font-semibold">
        HP: <span className="text-violet-700">{hp}</span>
      </div>
    </>
  );
};
