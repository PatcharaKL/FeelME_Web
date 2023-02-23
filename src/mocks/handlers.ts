import { happinessPointsMock, employees, users, token } from './mock-data';
import { DefaultBodyType, MockedRequest, RestHandler, rest } from "msw";

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

  rest.get(testUrl("/users/employees/:id/happiness-points"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(happinessPointsMock)
    );
  }),
  rest.get(testUrl("/users/employees"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(employees)
    );
  }),

  rest.post(testUrl("/login"), async (req, res, ctx) => {
    const { email, password } = await req.json();
    if (!email || !password) {
      return res(
        ctx.status(403),
        ctx.json({
          message: "Bad Request"
        })
      )
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res(
          ctx.status(200),
          ctx.json(token)
        )
      }
    }
    return res(
      ctx.status(401),
      ctx.json({
        message: "Unauthorized"
      })
    )
  })
];
