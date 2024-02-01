import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { charactersApi } from './api/characterApi';
import favoriteSlice from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    favorites: favoriteSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
