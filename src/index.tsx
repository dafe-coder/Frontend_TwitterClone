import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from '@mui/material';
import theme from './Theme';
import {RouterProvider} from 'react-router-dom';
import { router } from './navigation/Navigation';
import {store} from './redux/store'
import { Provider } from 'react-redux';

declare module '@mui/material/styles' { 
    interface BreakpointOverrides {
      xs: false;
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true;
      tablet: true; 
      laptop: true;
      desktop: true;
    }
  }

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
    <React.StrictMode>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                        <RouterProvider router={router} />
                </Provider>
            </ThemeProvider>
    </React.StrictMode>
);
