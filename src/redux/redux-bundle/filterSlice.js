import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  filterValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
  blacklist: ['contacts', 'form'],
};

export const persistedFilterReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);

export const { changeFilterValue } = filterSlice.actions;
