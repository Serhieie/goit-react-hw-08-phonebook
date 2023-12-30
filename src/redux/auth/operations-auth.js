import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  succesRegistrationMessage,
  failedRegistrationMessage,
  failedLogin,
} from 'helpers/notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token);
      succesRegistrationMessage();
      return data;
    } catch (error) {
      failedRegistrationMessage();
      return thunkApi.rejectWithValue('Bad Request');
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      failedLogin();
      return thunkApi.rejectWithValue('Not correct user');
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/logout', credentials);
      token.unset();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('No Token');
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkApi.rejectWithValue('No valid token');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('error');
    }
  }
);
