import { createAsyncThunk } from '@reduxjs/toolkit';
import { Character } from '../../models/character';
import {
  addToFirebaseArray,
  readDataFromFirebase,
  removeFromFirebaseArray,
} from '../../services/dbActions';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (email: string) => {
    const favorites = await readDataFromFirebase<Character>(email, 'favorite');
    return favorites;
  },
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async ({ email, character }: { email: string; character: Character }) => {
    await addToFirebaseArray(email, 'favorite', character);
    return character;
  },
);

export const removeFavorite = createAsyncThunk(
  'favorites/removeFavorite',
  async ({ email, character }: { email: string; character: Character }) => {
    await removeFromFirebaseArray(email, 'favorite', character);
    return character;
  },
);
