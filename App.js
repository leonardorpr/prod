import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { MainNavigator } from './src/routes';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <MainNavigator />
      </View>
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
