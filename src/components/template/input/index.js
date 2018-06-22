import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../../utils/colors';
import style from './style';

const Input = ({ value, onChange, placeholder, secureTextEntry }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry || false}
    placeholderTextColor={colors.primary.normal}
    selectionColor={colors.accent.red}
    underlineColorAndroid='transparent'
    style={style.main}
  />
)

export default Input;
