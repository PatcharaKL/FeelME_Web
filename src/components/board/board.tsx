import { useCallback } from "react";
import { useAppSelector } from "../../app/hooks";
import { Chart } from "../graph/BarChart";
import { Employees } from "../employees/Employees";

export const Board = () => {
  const selectedID = useAppSelector(
    (state) => state.sidebarSelection.selectedItemID
  );

  const Display = useCallback(() => {
    if (selectedID === 1) {
      return <Chart />;
    }
    if (selectedID === 2) {
      return <Employees />;
    }
    return <div>None..</div>;
  }, [selectedID]);

  return (
    <div
      id="board"
      className="flex h-full w-full flex-1 items-center justify-center overflow-auto rounded-lg bg-white shadow-xl shadow-violet-200"
    >
      {Display()}
    </div>
  );
};
