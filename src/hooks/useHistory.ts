import { useCallback, useEffect } from 'react';
import {
  selectHistoryItems,
  selectHistoryLoading,
  selectIsHistoryFetching,
} from '../store/selectors/historySelectors';
import { useAppDispatch, useAppSelector } from './redux';
import {
  addHistoryItem,
  fetchHistory,
  removeHistoryItem,
} from '../store/thunks/historyThunks';
import { useAuthActions } from './useAuthActions';
import { History } from '../models/history';

export const useHistory = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectHistoryItems);
  const isLoading = useAppSelector(selectHistoryLoading);
  const isHistoryFetching = useAppSelector(selectIsHistoryFetching);
  const { user } = useAuthActions();

  useEffect(() => {
    if (user && user.email) {
      dispatch(fetchHistory(user.email));
    }
  }, [dispatch, user]);

  const addHistory = useCallback(
    (item: History) => {
      if (user && user.email) {
        dispatch(addHistoryItem({ email: user.email, item }));
      }
    },
    [dispatch, user],
  );

  const removeHistory = useCallback(
    (item: History) => {
      if (user && user.email) {
        dispatch(removeHistoryItem({ email: user.email, item }));
      }
    },
    [dispatch, user],
  );

  return { history, addHistory, removeHistory, isLoading, isHistoryFetching };
};
