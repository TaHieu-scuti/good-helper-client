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

class App extends React.Component {
  render() {
    return (
      <IntlProvider>
      <Store>
        <HashRouter>
          <Switch>
            <Route path='/' name='home' component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </Store>
      </IntlProvider>
    );
  }
}

export default App;
