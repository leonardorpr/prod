import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import { MainNavigator } from './src/routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="white"
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
