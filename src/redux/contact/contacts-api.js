import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'swaggerApi',
  baseQuery: async ({ url, method, body }, { signal }) => {
    try {
      const result = await axios.request({
        url,
        method,
        data: body,
        signal,
      });

      return { data: result.data };
    } catch (error) {
      return { error: error.message || 'Something went wrong!' };
    }
  },

  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({ url: 'contacts' }),
      providesTags: ['Contact'],
    }),

    postContact: builder.mutation({
      query: contactData => ({
        url: 'contacts',
        method: 'POST',
        body: contactData,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = contactsApi;
