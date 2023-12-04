import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { Notification } from '../Notification';
import { AlertColor } from '@mui/material';
import { fetchUserSignIn, selectUserStatus } from '../../redux/slices/User/userSlice';
import { LoadingState } from '../../redux/slices/Tweets/state';

type LoginProps = {
  open: boolean;
  setOpen: (close: boolean) => void
}

export interface LoginFormProps {
  email: string;
  password: string;
}

const LoginFormSchema = yup
  .object({
    email: yup.string().email('Email is not correct').required('Write your email'),
    password: yup.string().min(6, 'The password length must be at least 6.').required(),
  })
  .required()

export const LoginModal: React.FC<LoginProps> = ({ open = false, setOpen }) => {
  const dispatch = useDispatch<AppDispatch>()
  const userStatus = useSelector(selectUserStatus)
  const openNotifications = React.useRef<(text: string, type: AlertColor) => void>(() => { });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = async (data: LoginFormProps) => {
    console.log(data);

    dispatch(fetchUserSignIn(data))
  }

  React.useEffect(() => {
    if (userStatus === LoadingState.LOADED) {
      openNotifications?.current('You has been login!', 'success')
      setOpen(false)
    } else if (userStatus === LoadingState.ERROR) {
      openNotifications?.current('The password or username is not correct!', 'error')
    }
  }, [userStatus, setOpen])

  const handleClose = () => {
    setOpen(false);
  };

  return (<Notification>
    {callback => {
      openNotifications.current = callback;

      return (<Dialog open={open} onClose={handleClose}>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Вход в Твиттер</DialogTitle>
          <DialogContent>
            <Controller
              name='email'
              control={control}
              render={({ field }) => <TextField autoFocus={true}
                defaultValue=''
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                helperText={errors.email?.message}
                error={!!errors.email}
                variant="standard" {...field} />}
            />
            <Controller
              name='password'
              control={control}
              render={({ field }) => <TextField
                margin="dense"
                defaultValue=''
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                helperText={errors.password?.message}
                error={!!errors.password}
                {...field}
              />}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Login</Button>
          </DialogActions>
        </form>
      </Dialog>)
    }}
  </Notification>

  );
}