import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Home, SignIn } from '../Pages';
import { Route, Routes } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { fetchGetMe } from '../services/api/authApi';
import { selectIsAuth, setUser } from '../redux/slices/User/userSlice';
import { useNavigate } from 'react-router-dom';

export const AppRoutes = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const isAuth = useSelector(selectIsAuth)

  const checkAuth = React.useCallback(async () => {
    try {
      const { data } = await fetchGetMe()
      dispatch(setUser(data))
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  React.useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth, navigate])

  React.useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return <Routes>
    <Route index path='/*' element={<Home />} />
    <Route path='/login' element={<SignIn />} />
  </Routes>
}