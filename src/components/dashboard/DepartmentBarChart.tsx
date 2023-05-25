import React from "react";
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import { useGetDepartmentProportionQuery } from "../../services/feelme_api";

interface FuzzyData {
  Value: number;
  Department: string;
}
interface RawUserHappinessHistory {
  fuzzy_co_worker_points_average: FuzzyData[];
  fuzzy_self_points_average: FuzzyData[];
  fuzzy_work_points_average: FuzzyData[];
  value_over_all_average: FuzzyData[];
}

interface UserHappinessHistory {
  self_points: number;
  work_points: number;
  co_worker_points: number;
  overall_score: number;
  department: string;
}

const transformToChartData = (
  rawData: RawUserHappinessHistory
): UserHappinessHistory[] => {
  const transformedData: UserHappinessHistory[] = [];

  const {
    fuzzy_self_points_average,
    fuzzy_work_points_average,
    fuzzy_co_worker_points_average,
    value_over_all_average
  } = rawData;

  for (let i = 0; i < fuzzy_self_points_average.length; i++) {
    const department = fuzzy_self_points_average[i].Department;
    const selfPoints = fuzzy_self_points_average[i].Value;
    const workPoints = fuzzy_work_points_average[i].Value;
    const coWorkerPoints = fuzzy_co_worker_points_average[i].Value;
    const overallScore = value_over_all_average[i].Value;

    const transformedEntry: UserHappinessHistory = {
      self_points: selfPoints,
      work_points: workPoints,
      co_worker_points: coWorkerPoints,
      overall_score: overallScore,
      department: department,
    };

    transformedData.push(transformedEntry);
  }
  console.log(transformedData);
  return transformedData;
};

const DepartmentBarChart = () => {
  const { data, isLoading, isSuccess } = useGetDepartmentProportionQuery({});
  return (
    <div className="h-full w-full">
      <div className="text-2xl font-semibold text-gray-800">
        Happiness Score Proportion
      </div>
      <div className="text-md font-light text-gray-500">
        happiness score proportion of all departments
      </div>
      {!isLoading ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={transformToChartData(data)}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Department" />
            <YAxis domain={[0, 100]}/>
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="self_points" fill="#ff828c" />
            <Bar dataKey="work_points" fill="#5fd28b" />
            <Bar dataKey="co_worker_points" fill="#caa782" />
            <Bar dataKey="overall_score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
};

export default DepartmentBarChart;
