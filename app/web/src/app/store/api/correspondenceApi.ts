import { apiSlice } from './apiSlice'

export const correspondenceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCorrespondence: builder.query({
      query: () => '/correspondence',
      providesTags: ['Correspondence'],
    }),
    getCorrespondenceById: builder.query({
      query: (id) => `/correspondence/${id}`,
      providesTags: ['Correspondence'],
    }),
    createCorrespondence: builder.mutation({
      query: (data) => ({
        url: '/correspondence',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Correspondence'],
    }),
    updateCorrespondence: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/correspondence/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Correspondence'],
    }),
    deleteCorrespondence: builder.mutation({
      query: (id) => ({
        url: `/correspondence/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Correspondence'],
    }),
  }),
})

export const {
  useGetCorrespondenceQuery,
  useGetCorrespondenceByIdQuery,
  useCreateCorrespondenceMutation,
  useUpdateCorrespondenceMutation,
  useDeleteCorrespondenceMutation,
} = correspondenceApi
