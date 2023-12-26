// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//   nameValue: '',
//   phoneValue: '',
// };

// export const persistedFormSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     changeFormValue(state, action) {
//       state[action.payload.field] = action.payload.value;
//     },
//   },
// });

// const persistConfig = {
//   key: 'form',
//   storage,
//   blacklist: ['contacts', 'filter', 'theme'],
// };

// export const persistedFormReducer = persistReducer(
//   persistConfig,
//   persistedFormSlice.reducer
// );

// export const { changeFormValue } = persistedFormSlice.actions;
