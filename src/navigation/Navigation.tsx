import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { Home, SignIn} from '../Pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <SignIn/>
    }
])