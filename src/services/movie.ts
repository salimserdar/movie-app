// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (searchTerm) => `?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = movieApi