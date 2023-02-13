import { useCallback } from "react";
import { useAppSelector } from "../../app/hooks";
import { Chart } from "../graph/BarChart";

export const Board = () => {
  const selectedID = useAppSelector(
    (state) => state.sidebarSelection.selectedItemID
  );

  const Display = useCallback(() => {
    if (selectedID === 1) {
      return <Chart />;
    }
    if (selectedID === 2) {
      return <div>Coming soon..</div>;
    }
    return <div>None..</div>;
  }, [selectedID]);

  return (
    <div
      id="board"
      className="flex flex-1 items-center justify-center overflow-hidden rounded-md bg-white text-white drop-shadow-md"
    >
      {Display()}
    </div>
  );
};
