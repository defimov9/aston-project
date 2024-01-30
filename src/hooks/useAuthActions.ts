import { useAppDispatch, useAppSelector } from './redux';
import { loginUser, logoutUser, registerUser } from '../services/auth';
import { clearUser, setUser } from '../store/slices/userSlice';
import { userSelector } from '../store/selectors/userSelector';

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

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
  };

  return { user, register, login, logout };
};
