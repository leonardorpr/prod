import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import style from './style';

const Card = ({ name, time, navigation }) => (
  <View style={style.container}>
    <TouchableOpacity onPress={navigation}>
      <View style={style.card}/>
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
