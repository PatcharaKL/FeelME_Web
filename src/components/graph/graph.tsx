import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetHappinessPointsQuery } from "../../services/feelme_api";

const userID = 1;

const resMock = {
  id: 1,
  period: "weekly",
  record: [
    {
      happiness_points: {
        self_points: 2,
        work_points: 4,
        co_worker_points: 8,
      },
      date: "2023-01-08",
    },
    {
      happiness_points: {
        self_points: -1,
        work_points: 2,
        co_worker_points: 1,
      },
      date: "2023-01-01",
    },
  ],
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
  rawData?: RawUserHappinessHistory
): UserHappinessHistory[] => {
  const { id, record } = resMock;
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

export const Graph = () => {
  const { data, isLoading, error } = useGetHappinessPointsQuery(userID);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <div>
          <BarChart width={730} height={250} data={transformToChartData(data)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="self_points" fill="#8884d8" />
            <Bar dataKey="work_points" fill="#82ca9d" />
            <Bar dataKey="co_worker_points" fill="#dcd505" />
          </BarChart>
        </div>
      )}
    </>
  );
};
