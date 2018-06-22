import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '../../../core/config';
import * as frb from 'firebase';

import style from './style';
import MetricCard from '../../template/metric-card';
import Button from '../../template/button';

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

      let count = 0;
      const completed = data.forEach((task) => {
        if(task.done) {
          count++;
        }
        return count;
      })

      this.setState({ completedTasks: count, totalTasks: data.length });
    });
  }

  signUp = () => {
    this.props.navigation.navigate('Login');
    frb.auth().signOut();
  }

  render() {
    const { totalTasks, completedTasks, list } = this.state;

    return (
      <View style={style.container}>
        <View style={style.data}>
          <Text style={style.letter}>Seus Resultados</Text>
          <MetricCard name='Total de Tarefas' value={totalTasks} />
          <MetricCard name='Tarefas Concluidas' value={completedTasks} styles={style.metric} />
          <Button text='Sair da Conta' submit={() => this.signUp()} styles={style.button}/>
        </View>
      </View>
    )
  }
}

export default Dashboard;
