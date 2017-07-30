import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import {BrowserRouter} from 'react-router-dom';
import {Router} from 'react-router';
import {MuiThemeProvider} from 'material-ui';
import {Base, HomePage, LoginPage, SignUpPage} from './App';

// var getMuiTheme = require('material-ui/styles/getMuiTheme').default;

/*
 injectTapEventPlugin();

 const App = () => {
 return (
 <MuiThemeProvider muiTheme={getMuiTheme()}>
 <Router history={BrowserRouter} routes={routes} />
 </MuiThemeProvider>);
 }
 */

const routes = {
    // base component (wrapper for the whole application).
    component: Base,
    childRoutes: [

        {
            path: '/',
            component: HomePage
        },

        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        }

    ]
};

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <LoginPage/>
    </MuiThemeProvider>, document.getElementById('root'));
