import { apiSlice } from './apiSlice'

export const consumablesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConsumables: builder.query({
      query: () => '/consumables',
      providesTags: ['Consumables'],
    }),
    createConsumable: builder.mutation({
      query: (data) => ({
        url: '/consumables',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Consumables'],
    }),
    updateConsumable: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/consumables/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Consumables'],
    }),
    deleteConsumable: builder.mutation({
      query: (id) => ({
        url: `/consumables/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Consumables'],
    }),
  }),
})

export const {
  useGetConsumablesQuery,
  useCreateConsumableMutation,
  useUpdateConsumableMutation,
  useDeleteConsumableMutation,
} = consumablesApi
