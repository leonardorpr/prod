import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { list } from '../../../../actions';
import style from './style';
import Card from '../../../template/card';
import Calendar from '../../../template/calendar';

class ListTask extends Component {
  componentDidMount = async () => await this.props.listTasks();

  renderItem = (task) => (
      <View style={style.tasks}>
        <Card key={task} name={task.text} time='20 minutos' />
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
    return (
      <View style={style.container}>
        <View style={style.calendar}>
          <Calendar
            tasks={
              {
                '2018-05-22': [{text: 'item 1 - any js object'}],
                '2018-05-22': [{text: 'item 1 - any js object'}],
                '2018-05-23': [{text: 'item 2 - any js object'}],
                '2018-05-24': [],
                '2018-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
              }
            }
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

mapStateToProps = ({ tasks }) => ({ list: tasks.listTasks });

mapDispatchToProps = dispatch => ({
  listTasks: () => dispatch(list())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
