import {ThemeProvider} from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from './theme';
import reset from "./Components/Reset";
import {Global} from "@emotion/react";


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global styles={reset}/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
