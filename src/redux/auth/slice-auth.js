import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, login, logout, fetchCurrentUser } from './operations-auth';
import { getRandomAvatarPath } from 'helpers/randomAvatar';

export const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  avatar: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeUserName(state, action) {
      state.user = { ...state.user, name: action.payload };
    },
    changeUserEmail(state, action) {
      state.user = { ...state.user, email: action.payload };
    },
    changeUserToken(state, action) {
      state.token = action.payload;
    },
    changeUserStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
    changeUserAvatar(state, action) {
      state.avatar = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.avatar = getRandomAvatarPath();
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = '';
      state.isLoggedIn = false;
      state.token = null;
      state.avatar = '';
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user', 'avatar'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
export const {
  changeUserName,
  changeUserEmail,
  changeUserStatus,
  changeUserToken,
  changeUserAvatar,
} = authSlice.actions;
