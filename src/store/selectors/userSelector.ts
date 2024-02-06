import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectUserState = (state: RootState) => state.user;

export const selectUser = createSelector(
  [selectUserState],
  (userState) => userState.user,
);

export const selectUserLoading = createSelector(
  [selectUserState],
  (userState) => userState.loading,
);
