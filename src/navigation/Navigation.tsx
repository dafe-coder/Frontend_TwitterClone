import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Home, SignIn } from '../Pages';
import { Route, Routes } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { fetchGetMeInfo, selectIsAuth, selectUserStatus } from '../redux/slices/User/userSlice';
import { useNavigate } from 'react-router-dom';
import { LoadingState } from '../redux/slices/Tweets/state';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from '@mui/material';

export const AppRoutes = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const isAuth = useSelector(selectIsAuth)
  const loadingStatus = useSelector(selectUserStatus)
  const isReady = loadingStatus !== LoadingState.NEVER && loadingStatus !== LoadingState.LOADING

  const checkAuth = React.useCallback(async () => {
    dispatch(fetchGetMeInfo())
  }, [dispatch])

  React.useEffect(() => {
    if (!isAuth && isReady) {
      navigate('/login')
    } else { navigate('/home') }
  }, [isAuth, isReady])

  React.useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (!isReady) {
    return (<Grid sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <TwitterIcon color='primary' sx={{ width: 80, height: 80 }} fontSize="inherit" />
    </Grid>)
  }

  return <Routes>
    <Route index path='/home/*' element={<Home />} />
    <Route path='/login' element={<SignIn />} />
  </Routes>
}