import ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from '@mui/material';
import theme from './Theme';
import {store} from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './navigation/Navigation';
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
    // <React.StrictMode>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                  <BrowserRouter>
                    <AppRoutes/>
                  </BrowserRouter>
                </Provider>
            </ThemeProvider>
    // </React.StrictMode>
);
