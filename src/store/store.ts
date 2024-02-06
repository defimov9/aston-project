import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { charactersApi } from './api/characterApi';
import favoriteSlice from './slices/favoriteSlice';
import { favoriteListenerMiddleware } from './middlewares/favoriteMiddleware';
import historySlice from './slices/historySlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    favorites: favoriteSlice,
    history: historySlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      charactersApi.middleware,
      favoriteListenerMiddleware.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
