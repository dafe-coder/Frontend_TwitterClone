import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchUserSignUp, selectUserStatus } from '../../redux/slices/User/userSlice';
import { AlertColor } from '@mui/material';
import { LoadingState } from '../../redux/slices/Tweets/state';

type RegisterProps = {
  open: boolean;
  setOpen: (close: boolean) => void
}
export interface RegisterFormProps {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  password2: string;
}

const LoginFormSchema = yup
  .object({
    fullName: yup.string().required('Write your full name'),
    userName: yup.string().min(4, 'user name is not correct').required('Write your unique user name'),
    email: yup.string().email('Email is not correct').required('Write your email'),
    password: yup.string().min(6, 'The password length must be at least 6.').required(),
    password2: yup.string().oneOf([yup.ref('password')], 'Passwords does not match!').required(),
  })
  .required()


export const RegisterModal: React.FC<RegisterProps> = ({ open, setOpen }) => {
  const dispatch = useDispatch<AppDispatch>()
  const userStatus = useSelector(selectUserStatus)
  const openNotifications = React.useRef<(text: string, type: AlertColor) => void>(() => { });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = async (data: RegisterFormProps) => {
    dispatch(fetchUserSignUp(data))
  }

  console.log(errors);


  React.useEffect(() => {
    if (userStatus === LoadingState.LOADED) {
      openNotifications?.current('You has been register!', 'success')
      setOpen(false)
    } else if (userStatus === LoadingState.ERROR) {
      openNotifications?.current('Has been error registration!', 'error')
    }
  }, [userStatus, setOpen])

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Dialog open={open} onClose={handleClose}>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Создайте учетную запись</DialogTitle>
        <DialogContent>
          <Controller
            name='fullName'
            control={control}
            render={({ field }) => <TextField autoFocus={true}
              margin="dense"
              defaultValue=''
              id="fullName"
              label="Full Name"
              type="text"
              fullWidth
              variant="standard"
              helperText={errors.fullName?.message}
              error={!!errors.fullName}
              {...field}
            />}
          />
          <Controller
            name='userName'
            control={control}
            render={({ field }) => <TextField
              margin="dense"
              defaultValue=''
              id="userName"
              label="User Name"
              type="text"
              fullWidth
              variant="standard"
              helperText={errors.userName?.message}
              error={!!errors.userName}
              {...field}
            />}
          />
          <Controller
            name='email'
            control={control}
            render={({ field }) => <TextField
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
          <Controller
            name='password2'
            control={control}
            render={({ field }) => <TextField
              margin="dense"
              defaultValue=''
              id="password2"
              label="Repeat Password"
              type="password"
              fullWidth
              variant="standard"
              helperText={errors.password2?.message}
              error={!!errors.password2}
              {...field}
            />}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '10px 24px 20px' }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' style={{ width: '100%' }}>Next</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}