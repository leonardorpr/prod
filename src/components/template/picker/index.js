import React from 'react';
import DatePicker from 'react-native-datepicker';
import colors from '../../../utils/colors';
import style from './style';

const Picker = ({ value, onChange }) => (
  <DatePicker
    style={style.input}
    date={value}
    mode="date"
    placeholder='Selecione a Data da Tarefa'
    format='YYYY-MM-DD'
    minDate='2018-01-01'
    maxDate='2025-01-01'
    locale={'pt_BR'}
    showIcon={false}
    confirmBtnText='Confirmar'
    cancelBtnText='Cancelar'
    onDateChange={(date) => onChange(date)}
    customStyles={{
      dateInput: {
        textAlign: 'center',
        height: 50,
        width: '95%',
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: colors.primary.normal,
        borderRadius: 25,
        color: colors.primary.light,
        backgroundColor : 'transparent'
      },
      placeholderText: {
        color: colors.primary.normal
      },
      dateText: {
        color: colors.primary.normal
      },
      btnTextConfirm: {
        color: colors.accent.red
      }
    }}
  />
)

export default Picker;
