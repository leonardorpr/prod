import React from 'react';
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import style from './style';

const Card = ({ name, time }) => (
  <View style={style.container}>
    <View style={style.card}/>
    <View style={style.informations}>
      <View style={style.task}>
        <Text style={style.titleTask}>{name}</Text>
      </View>
      <View style={style.time}>
        <Text style={style.titleTime}>{time}</Text>
      </View>
    </View>
  </View>
)

export default Card;
