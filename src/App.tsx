import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './common/route';
import { AppContext } from './state/context/AppContext';
import { configureStore } from './state/redux/store/Store';
import { InitialState } from './state/appState/InitialState';

const store = configureStore(InitialState);

export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppContext.Provider value={{}}>
          <Routes />
        </AppContext.Provider>
      </Provider>
    </React.Fragment>
  );
}
