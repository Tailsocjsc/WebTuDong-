import {AppRegistry} from 'react-native';
import App from './Src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox=true
