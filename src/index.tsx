import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from '@mui/material';
import theme from './Theme';
import {RouterProvider} from 'react-router-dom';
import { router } from './navigation/Navigation';

import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
