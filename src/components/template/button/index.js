import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../../../utils/colors';
import style from './style';

const SubmitButton = ({ text, submit, nameIcon, typeIcon }) => (
  <View style={style.container}>
    <Button
      icon={{name:`${nameIcon}`, type:`${typeIcon}`, buttonStyle: style.icon}}
      title={text}
      color={colors.accent.white}
      buttonStyle={style.button}
      backgroundColor={colors.accent.red}
      borderRadius={25}
      onLongPress={submit}
      onPress={submit}
    />
  </View>
)

export default SubmitButton;
