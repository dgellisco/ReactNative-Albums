/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//               -----------               //
//                 IMPORTS                 //
//               -----------               //

// NPM PACKAGES
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// COMPONENTS
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';


//               --------------               //
//                  MAIN APP                  //
//               --------------               //

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* App header */}
        <Header headerText={'Albums'} />
        {/* Scrollable list of albums */}
        <AlbumList />
      </View>
    );
  }
}
