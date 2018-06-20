import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import style from './style';

import Card from '../../../template/card';
import { list } from '../../../../actions';

class ListTask extends Component {
  componentDidMount = async () => await this.props.listTasks();

  listTask = () => (
    this.props.list.map((task, index) => (
      <Card key={index + 1} name={task.name} time='20 minutos' />
    ))
  )

  render() {
    return (
      <View style={style.container}>
        <View style={style.title}>
          <Text style={style.letter}>Tasks</Text>
          { this.listTask() }
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
