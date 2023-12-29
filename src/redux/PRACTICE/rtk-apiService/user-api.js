// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// let token;

// export const setAuthHeaders = newToken => {
//   token = newToken;
// };

// export const clearAuthHeaders = () => {
//   token = null;
// };

// export const userApi = createApi({
//   reducerPath: 'swaggerApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//     // prepareHeaders: headers => {
//     //   if (token) {
//     //     headers.set('Authorization', `Bearer ${token}`);
//     //   }

//     //   headers.set('Content-Type', 'application/json');
//     //   return headers;
//     // },
//   }),
//   tagTypes: ['User'],
//   endpoints: builder => ({
//     currentUser: builder.query({
//       query: () => ({
//         url: `/users/current`,
//         method: 'GET',
//       }),
//       invalidatesTags: ['User'],
//     }),
//     createNewUser: builder.mutation({
//       query: userData => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: userData,
//         // invalidatesTags: ['User'], // Цей параметр видалено
//       }),
//     }),
//     userLogin: builder.mutation({
//       query: userData => ({
//         url: `/users/login`,
//         method: 'POST',
//         body: userData,
//       }),
//       // invalidatesTags: ['User'], // Цей параметр видалено
//     }),
//     userLogout: builder.mutation({
//       query: () => ({
//         url: `/users/logout`,
//         method: 'POST',
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// });

// export const {
//   useCurrentUserQuery,
//   useCreateNewUserMutation,
//   useUserLoginMutation,
//   useUserLogoutMutation,
// } = userApi;
