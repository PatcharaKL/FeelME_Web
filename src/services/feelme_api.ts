// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const feelmeAPI = createApi({
  reducerPath: "feelmeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
      const accessToken = getState().auth.accessToken;
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHealthCheck: builder.query({
      query: () => `/health-check`,
    }),
    getHappinessPoints: builder.query({
      query: (id) => ({
        url: `/users/employees/${id}/happiness-points`,
        method: "POST",
      }),
    }),
    getEmployees: builder.query({
      query: () => `/users/employees/`,
    }),
    login: builder.mutation({
      query: (credential) => ({
        url: "/login",
        method: "POST",
        body: credential,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    getEmployee: builder.query({
      query: (id) => `/users/employees/?accountId=${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHealthCheckQuery,
  useGetHappinessPointsQuery,
  useGetEmployeesQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetEmployeeQuery,
} = feelmeAPI;
