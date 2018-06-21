import React, { Component } from 'react';
import { View } from 'react-native';
import TimePicker from 'react-native-picker-select';
import style from './style';
import colors from '../../../utils/colors';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.items = [
      {
        label: 'Selecione o Tempo da Tarefa',
        value: 0
      },
      {
        label: '1 minuto',
        value: 1,
      },
      {
        label: '2 minutos',
        value: 2,
      },
      {
        label: '3 minutos',
        value: 3,
      },
      {
        label: '4 minutos',
        value: 4,
      },
      {
        label: '5 minutos',
        value: 5,
      },
      {
        label: '10 minutos',
        value: 10,
      },
      {
        label: '15 minutos',
        value: 15,
      },
      {
        label: '20 minutos',
        value: 20,
      },
      {
        label: '30 minutos',
        value: 30,
      },
      {
        label: '40 minutos',
        value: 40,
      },
      {
        label: '50 minutos',
        value: 50,
      },
      {
        label: '60 minutos',
        value: 60,
      },
      {
        label: '1:30 horas',
        value: 90,
      },
      {
        label: '2:00 horas',
        value: 120,
      },
      {
        label: '3:00 horas',
        value: 180,
      },
      {
        label: '4:00 horas',
        value: 240,
      },
      {
        label: '5:00 horas',
        value: 300,
      },
    ]
  }

  render() {
    const { onChange, value } = this.props;

    return (
      <View style={style.container}>
        <TimePicker
          items={this.items}
          value={value}
          placeholder={{}}
          onValueChange={(value) => onChange(value)}
          hideIcon={true}
          hideDoneBar={true}
          style={{
            inputIOS: {
              height: 50,
              marginTop: 3,
              marginBottom: 10,
              alignItems: 'center',
              textAlign: 'center',
              paddingRight: 10,
              paddingLeft: 10,
              borderWidth: 2,
              borderColor: colors.primary.normal,
              borderRadius: 25,
              color: colors.primary.normal,
              backgroundColor : 'transparent'
            },
            inputAndroid: {
              height: 50,
              marginTop: 3,
              marginBottom: 10,
              alignItems: 'center',
              textAlign: 'center',
              paddingRight: 10,
              paddingLeft: 10,
              borderWidth: 2,
              borderColor: colors.primary.normal,
              borderRadius: 25,
              color: colors.primary.normal,
              backgroundColor : 'transparent'
            }
          }}
        />
      </View>
    )
  }
}

export default Timer;
