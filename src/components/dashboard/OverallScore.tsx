import React, { useEffect, useState } from "react";
import { useGetOverallHappinessScoreQuery } from "../../services/feelme_api";

const OverallScore = ({employeeID = ""}: any) => {
  const [period, setPeriod] = useState("");
  const {
    data: hpScore,
    isLoading,
    isSuccess,
  } = useGetOverallHappinessScoreQuery({period: "", id: employeeID});
  const score = {
    overall:
      hpScore && !isLoading && isSuccess
        ? hpScore?.value_over_all_average
        : "__",
    working:
      hpScore && !isLoading && isSuccess
        ? hpScore?.fuzzy_work_points_average
        : "__",
    self:
      hpScore && !isLoading && isSuccess
        ? hpScore?.fuzzy_self_points_average
        : "__",
    social:
      hpScore && !isLoading && isSuccess
        ? hpScore?.fuzzy_co_worker_points_average
        : "__",
  };
  return (
    <>
      <div className="flex overflow-hidden w-full items-center h-full justify-evenly rounded-xl border border-violet-50 py-7 shadow-md shadow-violet-100">
        <ScoreItems label="Overall Score" hpScore={score.overall} />
        <ScoreItems label="Workplace Score" hpScore={score.working} />
        <ScoreItems label="Self Score" hpScore={score.self} />
        <ScoreItems label="Social Score" hpScore={score.social} />
      </div>
    </>
  );
};

const ScoreItems = ({ hpScore, label }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-gray-500">{label}</div>
      <div className="text-3xl font-bold">
        {hpScore} <span className="text-xs font-normal">pts.</span>
      </div>
    </div>
  );
};

export default OverallScore;
