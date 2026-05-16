import { apiSlice } from './apiSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ email, password, companyName, firstName, lastName }) => ({
        url: '/auth/register',
        method: 'POST',
        body: { email, password, companyName, firstName, lastName },
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
