import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
    setShowPass: state => {
      state.showPass = !state.showPass;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
  whitelist: ['darkTheme'],
};

export const persistedThemeReducer = persistReducer(
  persistConfig,
  themeSlice.reducer
);

export const { setTheme, setShowPass } = themeSlice.actions;
export const selectDarkTheme = state => state.theme.darkTheme;
