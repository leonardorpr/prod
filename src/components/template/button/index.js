import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../../../utils/colors';
import style from './style';

const SubmitButton = ({ text, submit, nameIcon, typeIcon, styles }) => (
    <View style={style.container}>
      <TouchableOpacity>
        <Button
          icon={nameIcon ? {name:`${nameIcon}`, type:`${typeIcon}`} : null}
          title={text}
          color={colors.accent.white}
          buttonStyle={[style.button, styles]}
          backgroundColor={colors.accent.red}
          borderRadius={25}
          onLongPress={submit}
          onPress={submit}
        />
      </TouchableOpacity>
    </View>
)

export default SubmitButton;
