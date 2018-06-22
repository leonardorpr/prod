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
        <Card key={task} name={task.text} time='20 minutos' navigation={() => this.props.navigation.navigate('TaskDetail', task)}/>
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
    const { calendar } = this.props;

    return (
      <View style={style.container}>
        <View style={style.calendar}>
          <Calendar
            tasks={calendar}
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

mapStateToProps = ({ tasks }) => ({ list: tasks.listTasks, calendar: tasks.calendar });

mapDispatchToProps = dispatch => ({
  listTasks: () => dispatch(list())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
