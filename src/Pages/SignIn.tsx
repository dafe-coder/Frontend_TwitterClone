import React from 'react';
import {Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {SvgIcon} from '../svgs/';
import theme from '../Theme';
import {Typography} from '@mui/material';
import {LoginModal, RegisterModal} from '../Components/modals';

const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'flex',
        height: '100vh'
    },
    blueBox: {
        width: '54%',
        backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)',
        color: theme.palette.primary.main
    },
    rightBlock: {
        padding: '50px 35px'
    }
}));

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const [openRegister, setOpenRegister] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);

    return (
        <div className={classes.wrap}>
            <div className={classes.blueBox}></div>
            <div className={classes.rightBlock}>
                <SvgIcon height={45} fill={theme.palette.primary.main} type='logo'/>
                <Typography
                    sx={{
                        marginTop: '50px'
                    }}
                    variant='h1'>В курсе<br/>
                    происходящего
                </Typography>
                <Typography
                    sx={{
                        marginTop: '20px',
                        marginBottom: '32px'
                    }}
                    variant='h3'>Присоединяйтесь к Твиттеру прямо сейчас!
                </Typography>
                <div>
                    <Button onClick={() => setOpenRegister(true)}>Зарегистрироваться</Button>
                    <Typography
                        sx={{
                            fontSize: '11px',
                            lineHeight: '12px',
                            width: '300px',
                            marginTop: '15px'
                        }}>
                        Регистрируясь, вы соглашаетесь с Условиями предоставления услуг и Политикой
                        конфиденциальности, а также с Политикой использования файлов cookie.
                    </Typography>
                    <div
                        style={{
                            marginTop: 50
                        }}>
                        <Typography
                            variant='h6'
                            sx={{
                                marginBottom: "20px"
                            }}>Уже зарегистрированы?
                        </Typography>
                        <Button variant='outlined' onClick={() => setOpenLogin(true)}>Войти</Button>
                    </div>
                </div>
            </div>
            {openRegister && <RegisterModal open={openRegister} setOpen={setOpenRegister}/>}
            {openLogin && <LoginModal open={openLogin} setOpen={setOpenLogin}/>}
        </div>
    )
}