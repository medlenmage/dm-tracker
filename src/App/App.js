import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationViews } from '../ApplicationView';
import { Nav } from '../nav/Nav';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import './App.scss';

export const App = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem('r_token')) {
        return <>
              <Route render={Nav} />
              <Route render={(props) => <ApplicationViews { ...props } />} />
          </>;
      } else {
        return <Redirect to="/login" />
      }
    }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />

  </>
);