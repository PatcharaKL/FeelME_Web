// src/mocks/handlers.js
import { delay } from "@reduxjs/toolkit/dist/utils";
import { rest } from "msw";

const testUrl = (baseUrl: string) => {
  return `${import.meta.env.VITE_BASE_URL}${baseUrl}`;
};

export const handlers = [
  rest.get(testUrl("/health-check"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Healthy",
      })
    );
  }),
  rest.get(testUrl("/users/1/happiness-points"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
      })
    );
  }),
];
