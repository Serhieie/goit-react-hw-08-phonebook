import { combineReducers } from 'redux';
import { contactsApi } from '../contacts/contacts-api';
import { persistedFilterReducer } from './filterSlice';
import { persistedThemeReducer } from '../theme/themeReducer.js';
import { persistedAuthReducer } from '../auth/slice-auth';
// import { contactsReducer } from '../PRACTICE/contacts-slice';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  // contacts: contactsReducer,
  filter: persistedFilterReducer,
  theme: persistedThemeReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
