import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../models/character';
import {
  addFavorite,
  fetchFavorites,
  removeFavorite,
} from '../thunks/favoriteThunks';

interface FavoriteState {
  items: Character[];
  loading: boolean;
}

const initialState: FavoriteState = { items: [], loading: false };

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(removeFavorite.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
        state.loading = false;
      });
  },
});

export default favoriteSlice.reducer;
