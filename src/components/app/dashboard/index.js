import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '../../../core/config';

import style from './style';
import MetricCard from '../../template/metric-card';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTasks: 0,
      completedTasks: 0
    }
  }

  componentDidMount = () => {
    firebase.database().ref('tasks').on('value', snapshot => {
      const value = snapshot.val();
      const data = !!value ? Object.keys(value).map(uid => ({ ...value[uid], uid })) : [];

      const completed = data.filter((task) => task.done === 'true');
      console.log(completed)
      this.setState({ completedTasks: completed.length, totalTasks: data.length });
    });
  }

  render() {
    const { totalTasks, completedTasks, list } = this.state;

    return (
      <View style={style.container}>
        <View style={style.data}>
          <Text style={style.letter}>Seus Resultados</Text>
          <MetricCard name='Total de Tarefas' value={totalTasks} />
          <MetricCard name='Tarefas Concluidas' value={completedTasks} styles={style.metric} />
        </View>
      </View>
    )
  }
}

export default Dashboard;
