/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './src/containers/home/index';
import {name as appName} from './app.json';
import Routes from './src/cores/routes/index';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Routes);
