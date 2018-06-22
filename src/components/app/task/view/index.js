import React, { Component } from 'react';
import { View } from 'react-native';

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
        name: '',
        description: '',
        date: '',
        time: 0,
      },
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tarefa',
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
    const { name, description, date, time } = task;

    return (
      <View style={style.container}>
        <View style={style.form}>
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
            text={edit ? 'Salvar Tarefa' : 'Concluir Tarefa'}
            styles={style.button}
            //submit={() => createTask(task)}
          />
        </View>
      </View>
    )
  }
}

export default TaskDetail;
