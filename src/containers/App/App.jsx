import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';
import Store from './AppStore';
import IntlProvider from "./IntlProvider";
import Login from "../../components/Auth/LoginPage";
import createHistory from "history/createBrowserHistory"

export const history = createHistory();

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

const DefaultLayout = Loadable({
  loader: () => import('../../components/Layouts'),
  loading
})

const LogoutLayout = Loadable({
  loader: () => import('../../components/Auth/logout'),
  loading
})

history.listen((location, action) => {
  window.scrollTo(0, 0)
})

class App extends React.Component {
  render() {
    return (
      <IntlProvider>
      <Store>
        <HashRouter>
          <Switch>
            <Route path='/' name='home' component={DefaultLayout} />
            <Route path='/login' name='login' component={Login} />
            <Route path='/logout' name='logout' component={LogoutLayout} />
          </Switch>
        </HashRouter>
      </Store>
      </IntlProvider>
    );
  }
}

export default App;
