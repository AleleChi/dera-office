import { apiSlice } from './apiSlice'

export const printerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPrinterLogs: builder.query({
      query: () => '/printer/logs',
      providesTags: ['Printer'],
    }),
    createPrinterLog: builder.mutation({
      query: (data) => ({
        url: '/printer/logs',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Printer'],
    }),
    updatePrinterLog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/printer/logs/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Printer'],
    }),
    deletePrinterLog: builder.mutation({
      query: (id) => ({
        url: `/printer/logs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Printer'],
    }),
  }),
})

export const {
  useGetPrinterLogsQuery,
  useCreatePrinterLogMutation,
  useUpdatePrinterLogMutation,
  useDeletePrinterLogMutation,
} = printerApi
