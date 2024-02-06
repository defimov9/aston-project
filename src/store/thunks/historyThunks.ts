import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToFirebaseArray,
  readDataFromFirebase,
  removeFromFirebaseArray,
} from '../../services/dbActions';
import { History } from '../../models/history';

export const fetchHistory = createAsyncThunk(
  'history/fetchHistory',
  async (email: string) => {
    const history = await readDataFromFirebase<History>(email, 'history');
    return history;
  },
);

export const addHistoryItem = createAsyncThunk(
  'history/addHistoryItem',
  async ({ email, item }: { email: string; item: History }) => {
    await addToFirebaseArray(email, 'history', item);
    return item;
  },
);

export const removeHistoryItem = createAsyncThunk(
  'history/removeHistoryItem',
  async ({ email, item }: { email: string; item: History }) => {
    await removeFromFirebaseArray(email, 'history', item);
    return item;
  },
);
