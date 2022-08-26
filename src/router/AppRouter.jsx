
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';
import { ChekingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  
  const {status} = useCheckAuth();

  if (status === 'cheking') {
    return <ChekingAuth />
  }

  return (
    <Routes>
      {
        status==='authenticated'? <Route path='/*' element={<JournalRoutes />} />
        :<Route path='/auth/*' element={<AuthRoutes />} />
      }
      /*<Route path='/*' element={<Navigate to='/auth/login' />} />*/
    </Routes >
  )
}