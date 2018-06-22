import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { create } from '../../../../actions';

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
      },
      formatDate: '',
    }
  }

  onInputChange = (field, value) => this.setState((prevState) => ({ task:{ ...prevState.task, [field]: value } }));

  onDateChange = (value) => {
    this.setState((prevState) => ({ task:{ ...prevState.task, date: value } }));
  }

  render() {
    const { createTask } = this.props;
    const { task, formatDate } = this.state;
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
              onChange={(value) => this.onDateChange(value)}
            />
            <TimePicker
              value={time}
              onChange={value => this.onInputChange('time', value)}
            />
            <Button
              text='Criar Tarefa'
              submit={() => createTask(task)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

mapDispatchToProps = (dispatch) => ({
  createTask: (data) => dispatch(create(data))
});

export default connect(null, mapDispatchToProps)(CreateTask);
