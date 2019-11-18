import React, { Component, Suspense } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import routes from '../../routes';

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loading() {
    return (
      <div className="animated fadeIn pt-1 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
      </div>
    );
  };
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )}/>
                    ) : (null);
                  })}
                  <Redirect from="/" to="/home"/>
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
      </div>
    )
  }
}

export default Layout
