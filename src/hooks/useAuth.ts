import { useCallback } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from './redux';
import { loginUser, logoutUser, registerUser } from '../services/auth';
import { clearUser, setUser } from '../store/slices/userSlice';
import { auth } from '../firebase';
import { userSelector } from '../store/selectors/userSelector';

export const useAuth = () => {
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

  const subscribeToAuthChanges = useCallback(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = { uid: user.uid, email: user.email };
        dispatch(setUser(userData));
      } else {
        dispatch(clearUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return { user, register, login, logout, subscribeToAuthChanges };
};
