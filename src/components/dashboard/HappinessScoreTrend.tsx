import {
  LineChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Line,
  Label,
  Brush,
} from "recharts";
import { useGetHappinessPointsQuery } from "../../services/feelme_api";
import OverallScore from "./OverallScore";
import { useEffect, useState } from "react";

const arg = {
  id: 2,
  period: "month",
};

interface RawUserHappinessHistory {
  id: number;
  period: string;
  record: {
    happiness_points: {
      self_points: number;
      work_points: number;
      co_worker_points: number;
    };
    date: string;
  }[];
}

interface UserHappinessHistory {
  id: number;
  self_points: number;
  work_points: number;
  co_worker_points: number;
  date: string;
}

const transformToChartData = (
  rawData: RawUserHappinessHistory
): UserHappinessHistory[] => {
  const transformedData = [];
  if (rawData) {
    const { id, record } = rawData;
    for (const i in record) {
      const dateStr = record[i].date.split(" ")[0];
      const date = new Date(dateStr);
      transformedData.push({
        id: id,
        ...record[i].happiness_points,
        date: date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "2-digit",
        }),
      });
    }
  }
  return transformedData;
};

export const HappinessScoreTrend = () => {
  const { data, isLoading, isSuccess, error } = useGetHappinessPointsQuery(arg);
  const record: UserHappinessHistory[] = transformToChartData(data)

  return (
    <div className="h-full w-full">
      <OverallScore />
      <div className="text-2xl font-bold text-gray-600">
        Happiness Score Trend
      </div>
      <div className="text-md text-gray-500">
        Your company happiness score trend
      </div>
      {isLoading ? (
        <div className="h-[70%] w-full animate-pulse bg-gray-100">
          Loading..
        </div>
      ) : (
        <div className="h-full w-full flex-col">
          <ResponsiveContainer width="100%" height="70%">
            <LineChart data={record}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                dataKey={"Happiness points"}
                domain={[0, 100]}
                label={{
                  value: "Happiness Score",
                  angle: -90,
                  position: "insideLeft",
                  textAnchor: "middle",
                }}
              />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line
                type="monotone"
                name="Self Score"
                dataKey="self_points"
                stroke="#8884d8"
              />
              <Line
                type="monotone"
                name="Work Score"
                dataKey="work_points"
                stroke="#82ca9d"
              />
              <Line
                type="monotone"
                name="Co-Worker Score"
                dataKey="co_worker_points"
                stroke="#caa782"
              />
              <Brush
                dataKey={"date"}
                height={30}
                stroke="#8884d8"
                startIndex={record.length - 7}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
