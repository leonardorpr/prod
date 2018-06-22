import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '../../../../core/config';

import style from './style';
import Card from '../../../template/card';
import Calendar from '../../../template/calendar';

class ListTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: {},
    }
  }

  componentDidMount = async () => {
    await firebase.database().ref('tasks').on('value', snapshot => {
      const value = snapshot.val();
      const data = !!value ? Object.keys(value).map(uid => ({ ...value[uid], uid })) : [];

      const calendar = this.groupBy(data, 'date');
      this.setState({ list: calendar });
    });
  };

  groupBy = (arr, key) => (
    arr.reduce((grouped, value) => {
      grouped[value[key]] = grouped[value[key]] || [];
      grouped[value[key]].push(value);
      return grouped;
    }, {})
  )

  renderItem = (task) => (
      <View style={style.tasks}>
        <Card key={task.uid} name={task.name} time={`${task.time} minutos`} navigation={() => this.props.navigation.navigate('TaskDetail', task)}/>
      </View>
  )

  emptyDate = () => (
    <View style={style.emptyDate}>
      <Text style={style.phrase}>Putz! Você não cadastrou nenhuma tarefa nesse dia 😫</Text>
    </View>
  )

  emptyData = () => (
    <View style={style.emptyData}>
      <Text style={style.phrase}>Putz! Você não cadastrou nenhuma tarefa nesse dia 😫</Text>
    </View>
  )

  rowHasChanged = (firstTask, secondTask) => firstTask.text !== secondTask.text;

  render() {
    const { list } = this.state;

    return (
      <View style={style.container}>
        <View style={style.calendar}>
          <Calendar
            tasks={list}
            rowHasChanged={this.rowHasChanged}
            renderItem={this.renderItem}
            renderEmptyDate={this.emptyDate}
            renderEmptyData={this.emptyData}
          />
        </View>
      </View>
    )
  }
}

export default ListTask;
