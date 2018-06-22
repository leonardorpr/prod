import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HeaderButtons from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import firebase from '../../../../core/config';

import style from './style';
import Input from '../../../template/input';
import Button from '../../../template/button';
import DatePicker from '../../../template/picker';
import TimePicker from '../../../template/timer';
import If from '../../../template/if';
import colors from '../../../../utils/colors';

class TaskDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      task: {
        name: this.props.navigation.state.params.name,
        description: this.props.navigation.state.params.description,
        date: this.props.navigation.state.params.date,
        time: this.props.navigation.state.params.time,
        done: this.props.navigation.state.params.done
      },
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      deleteTask: this.deleteTask,
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.name,
      headerRight: (
        <HeaderButtons IconComponent={Ionicons} OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />} iconSize={23} color={colors.accent.white}>
          <HeaderButtons.Item title="remove" iconName="ios-trash" onPress={() => navigation.state.params.deleteTask()} />
        </HeaderButtons>
      )
    }
  }

  deleteTask = () => {
    const commentRef = firebase.database().ref(`tasks/${ this.props.navigation.state.params.uid}`);
    commentRef.remove();
    return this.props.navigation.navigate('Tasks');
  }

  finalizationTask = () => {
    const { name, description, date, time, done } = this.state.task;
    const task = { name, description, date, time, done: true };

    const commentRef = firebase.database().ref(`tasks/${this.props.navigation.state.params.uid}`);
    commentRef.update(task);
    this.setState((prevState) => ({ task: { ...prevState.task, done: true } }));
    this.props.navigation.navigate('Tasks');
  }

  onInputChange = (field, value) => this.setState((prevState) => ({ task:{ ...prevState.task, [field]: value } }));

  render() {
    const { createTask } = this.props;
    const { task, edit } = this.state;
    const { name, description, date, time, done } = task;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.form}>
            <Input
              placeholder='Nome da Tarefa'
              value={name}
              onChange={(value) => this.onInputChange('name', value)}
              styles={style.input}
            />
            <Input
              placeholder='Descrição da Tarefa'
              value={description}
              onChange={(value) => this.onInputChange('description', value)}
              styles={style.input}
            />
            <DatePicker
              value={date}
              onChange={(value) => this.onInputChange('date', value)}
            />
            <TimePicker
              value={time}
              onChange={(value) => this.onInputChange('time', value)}
            />
            <If test={!done}>
              <Button
                text='Concluir Tarefa'
                styles={style.button}
                submit={() => this.finalizationTask()}
              />
            </If>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default TaskDetail;
