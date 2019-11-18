import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import storage from 'redux-persist/es/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import { setHttpClient } from '../../lib/redux/actions';
import reducers from '../../lib/redux/reducers';
import axios from 'axios';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    this.store = createStore(
      persistReducer({key: 'persistedStore', storage}, reducers),
      composeEnhancer(applyMiddleware(this.subscriber)),
    );
    /**
     * Instance of Axios
     *
     * @type {AxiosInstance}
     */
    const http = axios.create({
      baseURL: 'http://localhost:3000/',
    });
    
    this.store.dispatch(setHttpClient(http));
    this.persistor = persistStore(this.store);
  }

  subscriber(store) {
    return next => action => {
      /**
       * Here is before dispatch.
       */
      const returnValue = next(action);
      
      return returnValue;
    };
  }

  render() {
    return (
      <Provider store={this.store}>
        <PersistGate persistor={this.persistor}>
          {this.props.children}
        </PersistGate>
      </Provider>
    )
  }
}

export default Store
