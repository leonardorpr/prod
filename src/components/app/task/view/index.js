import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import style from './style';
import Input from '../../../template/input';
import Button from '../../../template/button';
import DatePicker from '../../../template/picker';
import TimePicker from '../../../template/timer';

class TaskDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      task: {
        description: this.props.navigation.state.params.text,
        date: '',
        time: 0,
      },
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.text,
      //headerRight:
    }
  }

  onInputChange = (field, value) => this.setState((prevState) => ({ task:{ ...prevState.task, [field]: value } }));

  onDateChange = (value) => {
    this.setState((prevState) => ({ task:{ ...prevState.task, date: value } }));
  }

  render() {
    const { createTask } = this.props;
    const { task, edit } = this.state;
    const { description, date, time } = task;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.form}>
            <Input
              placeholder='Descrição da Tarefa'
              value={description}
              onChange={(value) => this.onInputChange('description', value)}
              styles={style.input}
            />
            <DatePicker
              value={date}
              onChange={(value) => this.onDateChange(value)}
            />
            <TimePicker
              value={time}
              onChange={(value) => this.onInputChange('time', value)}
            />
            <Button
              text={edit ? 'Salvar Tarefa' : 'Concluir Tarefa'}
              styles={style.button}
              //submit={() => createTask(task)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default TaskDetail;
