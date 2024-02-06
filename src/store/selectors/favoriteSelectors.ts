import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectFavoritesState = (state: RootState) => state.favorites;

export const selectFavoriteItems = createSelector(
  [selectFavoritesState],
  (favoritesState) => favoritesState.items,
);

export const selectFavoritesLoading = createSelector(
  [selectFavoritesState],
  (favoritesState) => favoritesState.loading,
);

export const selectIsFavoriteFetching = createSelector(
  [selectFavoritesState],
  (favoritesState) => favoritesState.isFavoriteFetching,
);
