import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectHistoryState = (state: RootState) => state.history;

export const selectHistoryItems = createSelector(
  [selectHistoryState],
  (historyState) => historyState.items,
);

export const selectHistoryLoading = createSelector(
  [selectHistoryState],
  (historyState) => historyState.loading,
);

export const selectIsHistoryFetching = createSelector(
  [selectHistoryState],
  (historyState) => historyState.isHistoryFetching,
);
