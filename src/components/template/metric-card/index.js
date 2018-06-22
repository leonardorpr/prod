import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const Card = ({ name}) => (
  <View style={{ flex: 1 }}>
    <View style={style.container}>
      <View style={style.card}/>
      <View style={style.informations}>
        <View style={style.task}>
          <Text style={style.titleTask}>{name}</Text>
        </View>
      </View>
    </View>
  </View>
)

export default Card;
