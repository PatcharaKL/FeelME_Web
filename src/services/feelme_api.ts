// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const feelmeAPI = createApi({
  reducerPath: 'feelmeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173" }),
  endpoints: (builder) => ({
    getHealthCheck: builder.query({
      query: () => `/health-check`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHealthCheckQuery } = feelmeAPI