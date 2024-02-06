import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { Character } from '../models/character';
import { useAuthActions } from './useAuthActions';
import {
  selectFavoriteItems,
  selectFavoritesLoading,
  selectIsFavoriteFetching,
} from '../store/selectors/favoriteSelectors';
import {
  addFavorite,
  fetchFavorites,
  removeFavorite,
} from '../store/thunks/favoriteThunks';

const useFavorite = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoriteItems);
  const isLoading = useAppSelector(selectFavoritesLoading);
  const isFavoriteFetching = useAppSelector(selectIsFavoriteFetching);
  const { user } = useAuthActions();

  useEffect(() => {
    if (user && user.email) {
      dispatch(fetchFavorites(user.email));
    }
  }, [dispatch, user]);

  const isFavorite = useCallback(
    (character: Character) => favorites.some((fav) => fav.id === character.id),
    [favorites],
  );

  const toggleFavorite = useCallback(
    (character: Character) => {
      if (!user || !user.email) return;

      if (isFavorite(character)) {
        dispatch(removeFavorite({ email: user.email, character }));
      } else {
        dispatch(addFavorite({ email: user.email, character }));
      }
    },
    [dispatch, isFavorite, user],
  );

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    isLoading,
    isFavoriteFetching,
  };
};

export default useFavorite;
