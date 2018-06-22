import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import style from './style';

const SocialButton = ({ title, type, onPress }) => (
  <View style={style.container}>
    <SocialIcon
      title={title}
      button
      type={type}
      style={style.button}
      onLongPress={onPress}
      onPress={onPress}
    />
  </View>
)

export default SocialButton;
