import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';

const Card = ({ name, time, navigation, done }) => (
  <View style={style.container}>
    <TouchableOpacity onPress={navigation}>
      <View style={!done ? style.card : style.doneCard}/>
      <View style={style.informations}>
        <View style={style.task}>
          <Text style={style.titleTask}>{name}</Text>
        </View>
        <View style={style.time}>
          <Text style={style.titleTime}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
)

export default Card;
