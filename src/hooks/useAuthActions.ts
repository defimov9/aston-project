import { useAppDispatch, useAppSelector } from './redux';
import { loginUser, logoutUser, registerUser } from '../services/auth';
import { clearUser, setUser } from '../store/slices/userSlice';
import { selectUser, selectUserLoading } from '../store/selectors/userSelector';
import { clearFavorites } from '../store/slices/favoriteSlice';

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectUserLoading);

  const register = async (email: string, password: string) => {
    const user = await registerUser(email, password);
    if (user) {
      dispatch(setUser({ uid: user.uid, email: user.email }));
    }
  };

  const login = async (email: string, password: string) => {
    const user = await loginUser(email, password);
    if (user) {
      dispatch(setUser({ uid: user.uid, email: user.email }));
    }
  };

  const logout = async () => {
    await logoutUser();
    dispatch(clearUser());
    dispatch(clearFavorites());
  };

  return { user, loading, register, login, logout };
};
