import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './style';

import Card from '../../../template/card';

class CreateTask extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.title}>
          <Text style={style.letter}>Create Task</Text>
          <Card/>
          <Card/>
        </View>
      </View>
    )
  }
}

export default CreateTask;
