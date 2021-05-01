/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './src/containers/home/index';
import {name as appName} from './app.json';
import Routes from './src/cores/routes/index';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';

const store = configureStore();
// const ReduxApp = () => {
//   return (
//     <Provider store={store}>
//       <Routes />
//     </Provider>
//   );
// };
const ReduxApp = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Routes);
AppRegistry.registerComponent(appName, () => ReduxApp);
