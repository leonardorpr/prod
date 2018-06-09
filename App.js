import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import store from './src/store';
import colors from './src/utils/colors';
import Navigator from './src/routes/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="white"
            barStyle="light-content"
          />
          <Navigator />
          <KeyboardSpacer />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
