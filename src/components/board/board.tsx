import { Chart } from "../graph/BarChart";

export const Board = () => {
  return (
    <div
      id="board"
      className="flex flex-1 items-center justify-center overflow-hidden rounded-md bg-white text-white drop-shadow-md"
    >
      <Chart />
      <Chart />
    </div>
  );
};
