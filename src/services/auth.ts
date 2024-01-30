import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { auth, db } from '../firebase';

export const registerUser = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      setDoc(doc(db, 'users', email), {
        favorite: [],
        history: [],
      });
      return user;
    })
    .catch((error) => {
      toast.error(error.message);
    });

export const loginUser = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      toast.error(error.message);
    });

export const logoutUser = () =>
  signOut(auth).catch((error) => {
    toast.error(error.message);
  });
