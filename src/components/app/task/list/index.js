import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './style';

class CreateTask extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.title}>
          <Text style={style.letter}>Tasks</Text>
        </View>
      </View>
    )
  }
}

export default CreateTask;
