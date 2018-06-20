import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { connect } from 'react-redux';
import { create } from '../../../../actions';

import style from './style';
import Input from '../../../template/input';
import Button from '../../../template/button';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        name: '',
        description: '',
      }
    }
  }

  onInputChange = (field, value) => this.setState((prevState) => ({ task:{ ...prevState.task, [field]: value } }));

  render() {
    const { createTask } = this.props;
    const { task } = this.state;
    const { name, description } = task;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.title}>
            <Text style={style.letter}>NOVA TAREFA</Text>
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
            <Button
              text='Criar Tarefa'
              nameIcon='ios-list'
              typeIcon='ionicon'
              submit={() => createTask(task)}
            />
          </View>
          <KeyboardSpacer />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

mapDispatchToProps = (dispatch) => ({
  createTask: (data) => dispatch(create(data))
});

export default connect(null, mapDispatchToProps)(CreateTask);
