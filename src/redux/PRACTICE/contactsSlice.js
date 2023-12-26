// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, postContact, deleteContact } from './mockData-api';
// import { initialState } from './initial';

// const handlePending = state => {
//   return { ...state, isLoading: true };
// };
// const handleFulfilled = (state, action) => {
//   return { ...state, isLoading: false, error: null, items: action.payload };
// };
// const handleRejected = (state, action) => {
//   return {
//     ...state,
//     isLoading: false,
//     error: action.payload,
//   };
// };
// const handlePostContact = (state, action) => {
//   return {
//     ...state,
//     isLoading: false,
//     error: null,
//     items: [action.payload, ...state.items],
//   };
// };
// const handleDeleteContact = (state, action) => {
//   return {
//     ...state,
//     isLoading: false,
//     error: null,
//     items: state.items.filter(item => item.id !== action.payload.id),
//   };
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       //FetchAll
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, handleFulfilled)
//       .addCase(fetchContacts.rejected, handleRejected)
//       //PostContact
//       .addCase(postContact.pending, handlePending)
//       .addCase(postContact.fulfilled, handlePostContact)
//       .addCase(postContact.rejected, handleRejected)
//       //DeleteContact
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, handleDeleteContact)
//       .addCase(deleteContact.rejected, handleRejected);
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
