import React from "react";
import { HappinessScoreTrend } from "./HappinessScoreTrend";
import OverallScore from "./OverallScore";
import DepartmentBarChart from "./DepartmentBarChart";

const Dashboard = () => {
  return (
    <div className="grid content-around h-full w-full grid-cols-4 p-8">
      {/* Overall Score */}
      <div className="col-span-4">
        <div className="">
          <div className="text-2xl font-semibold text-gray-800">
            Happiness Score
          </div>
          <div className="text-md font-light text-gray-500">
            your company all-time happiness score
          </div>
          <OverallScore />
        </div>
      </div>
      {/* happiness score trend */}
      <div className="col-span-2 h-[30rem]">
        <HappinessScoreTrend />
      </div>
      <div className=" col-span-2 h-[30rem]">
        <DepartmentBarChart />
      </div>
    </div>
  );
};

export default Dashboard;
