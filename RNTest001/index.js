import { AppRegistry } from 'react-native';
import {App} from './App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Class RCTCxxModule']);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import {MainPage} from './app/code/pages/MainPage';

AppRegistry.registerComponent('RNTest001', () => App);
