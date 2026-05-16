import { apiSlice } from './apiSlice'

export const subscriptionsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => '/subscriptions',
      providesTags: ['Subscriptions'],
    }),
    createSubscription: builder.mutation({
      query: (data) => ({
        url: '/subscriptions',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Subscriptions'],
    }),
    updateSubscription: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/subscriptions/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Subscriptions'],
    }),
    deleteSubscription: builder.mutation({
      query: (id) => ({
        url: `/subscriptions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Subscriptions'],
    }),
  }),
})

export const {
  useGetSubscriptionsQuery,
  useCreateSubscriptionMutation,
  useUpdateSubscriptionMutation,
  useDeleteSubscriptionMutation,
} = subscriptionsApi
