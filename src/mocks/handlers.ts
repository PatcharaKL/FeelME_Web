// src/mocks/handlers.js
import { rest } from "msw";

const testUrl = (baseUrl: string) => {
  return `http://localhost:5173${baseUrl}`;
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
];
