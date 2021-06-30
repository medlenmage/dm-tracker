import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationViews } from '../../ApplicationView';
import { NavBar } from '../Nav/Nav';
import { Login } from '../Auth/Login';
// import { Register } from '../../auth/Register';
import './App.scss';

export const App = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem('r_token')) {
        return <>
              <Route render={NavBar} />
              <Route render={(props) => <ApplicationViews { ...props } />} />
          </>;
      } else {
        return <Redirect to="/login" />
      }
    }} />

        <Route path="/login" render={Login} />
        {/* <Route path="/register" render={Register} /> */}

  </>
);