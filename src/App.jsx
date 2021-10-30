import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';
import './App.css';
import authOperations from 'redux/auth/auth-operation';
import authSelectors from 'redux/auth/auth-selectors';
import AppBar from 'components/AppBar/AppBar';
import LoginView from 'views/LoginView';
import RegistrationView from 'views/RegistrationView';
import PrivateRoute from 'components/Navigation/PrivateRoute';
import PublicRoute from 'components/Navigation/PublicRoute';
import ContactsView from 'views/ContactsView';
import HomeView from 'views/HomeView';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="container">
        <AppBar />

        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          <PublicRoute path="/register" restricted>
            <RegistrationView />
          </PublicRoute>

          <PublicRoute
            path="/login"
            redirectTo="/contacts"
            restricted
          >
            <LoginView />
          </PublicRoute>
        </Switch>
      </div>
    )
  );
}

export default App;
