import { configureStore } from '@reduxjs/toolkit';
import userSlice, { UserState } from '../../src/store/slices/userSlice';
import { charactersApi } from '../../src/store/api/characterApi';
import { favoriteListenerMiddleware } from '../../src/store/middlewares/favoriteMiddleware';
import favoriteSlice from '../../src/store/slices/favoriteSlice';
import historySlice from '../../src/store/slices/historySlice';

export const getMockStore = (initialState: { user: UserState }) =>
  configureStore({
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
    preloadedState: initialState,
  });
