import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';
import Store from './AppStore';
import IntlProvider from "./IntlProvider";

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

const DefaultLayout = Loadable({
  loader: () => import('../../components/Layouts'),
  loading
})

const LoginLayout = Loadable({
  loader: () => import('../../components/LoginPage'),
  loading
})

const LogoutLayout = Loadable({
  loader: () => import('../../components/Logout'),
  loading
})

class App extends React.Component {
  render() {
    return (
      <IntlProvider>
      <Store>
        <HashRouter>
          <Switch>
            <Route path='/' name='home' component={DefaultLayout} />
            <Route path='/login' name='login' component={LoginLayout} />
            <Route path='/logout' name='logout' component={LogoutLayout} />
          </Switch>
        </HashRouter>
      </Store>
      </IntlProvider>
    );
  }
}

export default App;
