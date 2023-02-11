import { Graph } from "../graph/graph";

export const Board = () => {
  return (
    <>
      <Graph />
    </>
  );
};

const Content = () => {
  return (
    <div
      id="board"
      className="flex flex-1 animate-pulse flex-col justify-center overflow-hidden rounded-md bg-gray-500 text-center font-mono text-6xl font-black text-white drop-shadow-lg"
    >
      <div>LOADING...</div>
    </div>
  );
};
