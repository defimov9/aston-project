import { createListenerMiddleware } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { addFavorite, removeFavorite } from '../thunks/favoriteThunks';

export const favoriteListenerMiddleware = createListenerMiddleware();

favoriteListenerMiddleware.startListening({
  actionCreator: addFavorite.fulfilled,
  effect: (action) => {
    toast.success(`Персонаж ${action.payload.name} добавлен в избранное!`);
  },
});

favoriteListenerMiddleware.startListening({
  actionCreator: removeFavorite.fulfilled,
  effect: (action) => {
    toast.success(`Персонаж ${action.payload.name} удален из избранного!`);
  },
});
