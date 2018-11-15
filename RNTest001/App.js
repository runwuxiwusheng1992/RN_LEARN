/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {SecondPage} from './app/code/pages/SecondPage';
import {MainPage} from './app/code/pages/MainPage';


const App = createStackNavigator({
    Root:
        {
        screen: MainPage,
        navigationOptions:
            {
                headerTitle:'登录',
                headerBackTitle:null
            }
        },
    Second: {
        screen: SecondPage,
        navigationOptions:
            {
                headerTitle:'第二页',
            }
    }
});

export {App};

