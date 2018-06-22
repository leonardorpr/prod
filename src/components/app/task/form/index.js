import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { format } from 'date-fns';
import firebase from '../../../../core/config';

import style from './style';
import Input from '../../../template/input';
import Button from '../../../template/button';
import DatePicker from '../../../template/picker';
import TimePicker from '../../../template/timer';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        name: '',
        description: '',
        date: '',
        time: 0,
        done: false,
      }
    }
  }

  onInputChange = (field, value) => this.setState((prevState) => ({ task:{ ...prevState.task, [field]: value } }));

  create = async (data) => {
    await firebase.database().ref('tasks').push(data);
    this.props.navigation.navigate('Tasks');
    this.setState({ task: { name: '', description: '', date: '', time: 0, } });
  }

  render() {
    const { task, formattedDate } = this.state;
    const { name, description, date, time } = task;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.form}>
            <Text style={style.letter}>Nova Tarefa</Text>
            <Input
              placeholder='Nome da Tarefa'
              value={name}
              onChange={value => this.onInputChange('name', value)}
            />
            <Input
              placeholder='Descrição da Tarefa'
              value={description}
              onChange={value => this.onInputChange('description', value)}
            />
            <DatePicker
              value={date}
              onChange={(value) => this.onInputChange('date', value)}
            />
            <TimePicker
              value={time}
              onChange={value => this.onInputChange('time', value)}
            />
            <Button
              text='Criar Tarefa'
              submit={() => this.create(task)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default CreateTask;
