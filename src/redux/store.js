import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { contactsApi } from './contact/contacts-api';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
