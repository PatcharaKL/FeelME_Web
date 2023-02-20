export const Employees = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <EmployeesCard />
    </div>
  );
};

const EmployeesCard = () => {
  const name = "Patchara Kleebbua";
  const postion = "Fullstack Developer";
  const hp = 100;
  const image =
    "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png";
  return (
    <>
      <div className="flex h-fit w-64 flex-col items-center gap-3 rounded-2xl bg-violet-50 py-8 text-center shadow-lg shadow-violet-100">
        <HealthBar hp={hp} />
        <img className="h-48 w-48 rounded-full" src={image}></img>
        <div>
          <div className="text-xl font-bold">{name}</div>
          <div>{postion}</div>
        </div>
      </div>
    </>
  );
};

const HealthBar = ({ hp }: { hp: number }) => {
  return (
    <>
      <div>{hp}</div>
    </>
  );
};
