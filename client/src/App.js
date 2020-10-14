import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeToggleSwitch from './components/layout/ThemeToggleSwitch';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <AuthState>
          <ContactState>
            <AlertState>
              <Router>
                <Fragment>
                  <Navbar />
                  <ThemeToggleSwitch
                    themeToggler={themeToggler}
                    theme={theme}
                  />
                  <div className='container'>
                    <Alerts />
                    <Switch>
                      <PrivateRoute exact path='/' component={Home} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/register' component={Register} />
                      <Route exact path='/login' component={Login} />
                    </Switch>
                  </div>
                </Fragment>
              </Router>
            </AlertState>
          </ContactState>
        </AuthState>
      </>
    </ThemeProvider>
  );
};

export default App;
