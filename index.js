import { AppRegistry } from 'react-native';
const App = require('./jsapp')
console.log(!!App)
const packageInfo = require('./package.json')
AppRegistry.registerComponent(packageInfo.name, () => App)