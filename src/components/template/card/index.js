import React from 'react';
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import style from './style';

const Card = ({}) => (
  <View style={style.container}>
    <View style={style.card}/>
    <View style={style.informations}>
      <View style={style.letter}>
        <Text style={style.titleTask}>Varrer</Text>
      </View>
      <View style={style.time}>
        <Text style={style.titleTime}>20 minutos</Text>
      </View>
    </View>
  </View>
)

export default Card;
