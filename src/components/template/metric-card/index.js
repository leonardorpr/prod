import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const Card = ({ name, value, styles }) => (
    <View style={[style.container, styles]}>
      <View style={style.informations}>
        <View style={style.task}>
          <Text style={style.titleTask}>{name}</Text>
        </View>
        <View style={style.value}>
          <Text style={style.titleValue}>{value}</Text>
        </View>
      </View>
    </View>
)

export default Card;
