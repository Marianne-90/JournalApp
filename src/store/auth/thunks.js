import {checkingCredentials, logout, login} from './authSlice';
import { singInWithGoogle } from '../../firebase/providers';

export const chekingAuthentication = ( email, password ) => {
  return async( dispach ) => {
    dispach(checkingCredentials());
  }
}

export const startGoogleSignIn = ( email, password ) => {
  return async( dispach ) => {
    
    dispach(checkingCredentials());
    
    const result = await singInWithGoogle();
    if(!result.ok) return dispach(logout(result.errorMessage));
    dispach(login(result))
  }
}