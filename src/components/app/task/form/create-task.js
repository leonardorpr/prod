import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import style from './style';

import Input from '../../../template/input';
import TextArea from '../../../template/text-area';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        name: '',
        description: '',
        date: new Date()
      }
    }
  }

  setDate = (newDate) => this.setState({ task: { date: newDate } });

  render() {
    const { name, description, date } = this.state.task;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.title}>
            <Text style={style.letter}>NOVA TAREFA</Text>
            <Input
              placeholder='Nome da Tarefa'
              value={name}
              onChange={value => this.setState({ task: { name: value } })}
            />
            <TextArea
              placeholder='Descrição da Tarefa'
              value={description}
              onChange={value => this.setState({ task: { description: value } })}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default CreateTask;
