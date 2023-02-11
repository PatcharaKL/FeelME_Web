// src/mocks/handlers.js
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
      ctx.json([
        {
          id: 1,
          self_points: 5,
          work_points: 4,
          co_worker_points: 3,
          date: "2022-01-01",
        },
        {
          id: 1,
          self_points: 2,
          work_points: -5,
          co_worker_points: 3,
          date: "2022-01-02",
        },
        {
          id: 1,
          self_points: 5,
          work_points: 4,
          co_worker_points: -3,
          date: "2022-01-03",
        },
      ])
    );
  }),
];
