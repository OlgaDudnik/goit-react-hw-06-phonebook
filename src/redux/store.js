import { configureStore } from '@reduxjs/toolkit';
import filter from './filter';
import contacts from './contacts';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contacts);

export const store = configureStore({
  reducer: {
    filter,
    contacts: persistedContactsReducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
