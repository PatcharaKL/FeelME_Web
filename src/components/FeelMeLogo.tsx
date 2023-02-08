import smileLogo from "../../src/assets/smile.png";

export const FeelMeLogo = () => {
  return (
    <>
      <div className="flex justify-center">
        <img className="h-16 object-scale-down" src={smileLogo}></img>
      </div>
      <div className="select-none text-4xl font-semibold text-gray-700">
        Feel<span className="font-extrabold text-violet-700">Them</span>
      </div>
      <div>feel your peoples -----</div>
    </>
  );
};
