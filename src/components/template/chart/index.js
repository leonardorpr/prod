import React from 'react';
import { View, Text } from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts';

import colors from '../../../utils/colors';
import style from './style';

const Chart = ({ progress, porcent }) => (
  <View style={style.container}>
    <ProgressCircle
      style={style.chart}
      progress={0.5}
      progressColor={colors.accent.red}
      backgroundColor={colors.secondary.light}
      strokeWidth={10}
    />
    <Text style={style.letterMetric}>50% - Conclusão das Tarefas</Text>
  </View>
)

export default Chart;
