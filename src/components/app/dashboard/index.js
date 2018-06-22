import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Chart from '../../template/chart';

import style from './style';
import MetricCard from '../../template/metric-card';

class Dashboard extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.data}>
          <Text style={style.letter}>Seus Resultados</Text>
          <Chart />
          <MetricCard/>
        </View>
      </View>
    )
  }
}

export default Dashboard;
