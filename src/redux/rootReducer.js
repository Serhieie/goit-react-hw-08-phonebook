import { combineReducers } from 'redux';
import { contactsApi } from './contact/contacts-api';
import { persistedFilterReducer } from './filter/filterSlice';
import { persistedThemeReducer } from './theme/themeReducer.js';
import { persistedAuthReducer } from './auth/slice-auth';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: persistedFilterReducer,
  theme: persistedThemeReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
