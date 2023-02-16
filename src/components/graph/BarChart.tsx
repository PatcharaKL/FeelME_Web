import {
  Bar,
  LineChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Line,
} from "recharts";
import { useGetHappinessPointsQuery } from "../../services/feelme_api";

const userID = 1;

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
  const { id, record } = rawData;
  const transformedData = [];
  for (const i in record) {
    transformedData.push({
      id: id,
      ...record[i].happiness_points,
      date: record[i].date,
    });
  }
  return transformedData;
};

export const Chart = () => {
  const { data, isLoading, isSuccess, error } =
    useGetHappinessPointsQuery(userID);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="70%">
            <LineChart data={transformToChartData(data)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                dataKey={"Happiness points"}
                tickCount={10}
                domain={[-5, 5]}
              />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke="#000" />
              <Line type="monotone" dataKey="self_points" fill="#8884d8" />
              <Line type="monotone" dataKey="work_points" fill="#82ca9d" />
              {/* <Line
                label={{ fill: "white" }}
                dataKey="co_worker_points"
                fill="#dcd505"
              /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};
