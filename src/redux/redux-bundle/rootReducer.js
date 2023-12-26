import { combineReducers } from 'redux';
import { contactsApi } from '../rtk-apiService/rtkq-api';
import { persistedFilterReducer } from './filterSlice';
import { persistedThemeReducer } from '../theme/themeReducer.js';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: persistedFilterReducer,
  theme: persistedThemeReducer,
});

export default rootReducer;
