import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store';

export const useCheckAuth = () => {
  
  const { status } = useSelector(state => state.auth);
  const distpach = useDispatch();

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return distpach(logout({errorMessage}));
      const { uid, email, displayName, photoURL } = user;
      distpach(login({uid, email, displayName, photoURL}));
    })

  }, []);

  return {status};
}