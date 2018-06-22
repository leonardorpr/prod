import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import style from './style';
import MetricCard from '../../template/metric-card';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTasks: this.props.list.length,
      completedTasks: 0
    }
  }

  UNSAFE_componentWillMount = () => {
    const completed = this.props.list.filter((task) => task.done === 'true');
    this.setState({ completedTasks: completed.length });
  }

  render() {
    const { totalTasks, completedTasks } = this.state

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

mapStateToProps = ({ tasks }) => ({ list: tasks.listTasks });

export default connect(mapStateToProps, null)(Dashboard);
