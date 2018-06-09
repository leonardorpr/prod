import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../../utils/colors';
import style from './style';

const TextArea = ({ value, onChange, placeholder }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    multiline={true}
    numberOfLines={2}
    placeholder={placeholder}
    placeholderTextColor={colors.primary.normal}
    selectionColor={colors.accent.red}
    underlineColorAndroid='transparent'
    style={style.main}
  />
)

export default TextArea;
