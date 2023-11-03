import { Home, SignIn } from '../Pages';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return <Routes>
    <Route index path='/*' element={<Home />} />
    <Route path='/login' element={<SignIn />} />
  </Routes>
}