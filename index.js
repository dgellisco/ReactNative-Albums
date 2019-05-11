/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Registers (at least one) component
AppRegistry.registerComponent(appName, () => App);

// // __ABOVE CODE WAS THE ORIGINAL CODE
        // // Import a library to help create a component
        // import React from 'react';
        // import ReactNative from 'react-native';

        // // Create a component
        // const App = () => {
        //     return (
        //         <Text>Hey!  Good work, buddy!!</Text>
        //     );
        // };

        // // Render it to the device
