import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './redux';
import { setUser, clearUser } from '../store/slices/userSlice';
import { auth } from '../firebase';

export const useAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
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
};
