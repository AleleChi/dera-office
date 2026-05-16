import { apiSlice } from './apiSlice'

export const gasLogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGasLogs: builder.query({
      query: () => '/gas-logs',
      providesTags: ['GasLogs'],
    }),
    createGasLog: builder.mutation({
      query: (data) => ({
        url: '/gas-logs',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['GasLogs'],
    }),
    updateGasLog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/gas-logs/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['GasLogs'],
    }),
    deleteGasLog: builder.mutation({
      query: (id) => ({
        url: `/gas-logs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GasLogs'],
    }),
  }),
})

export const {
  useGetGasLogsQuery,
  useCreateGasLogMutation,
  useUpdateGasLogMutation,
  useDeleteGasLogMutation,
} = gasLogsApi
