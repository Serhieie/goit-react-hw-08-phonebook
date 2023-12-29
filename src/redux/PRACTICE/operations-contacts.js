// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const postContact = createAsyncThunk(
//   'contacts/postContact',
//   async (contactData, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('contacts', contactData);

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`contacts/${contactId}`);

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
