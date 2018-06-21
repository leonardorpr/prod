import React from 'react';
import { LocaleConfig, Agenda } from 'react-native-calendars';

import colors from '../../../utils/colors';

LocaleConfig.locales['pt_BR'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
  dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
};

LocaleConfig.defaultLocale = 'pt_BR';

const Calendar = ({ tasks, renderItem, renderEmptyDate, rowHasChanged, renderEmptyData }) => (
  <Agenda
    items={tasks}
    renderItem={renderItem}
    renderEmptyDate={renderEmptyDate}
    renderEmptyData={renderEmptyData}
    rowHasChanged={rowHasChanged}
    theme={{
      calendarBackground: colors.secondary.normal,
      agendaKnobColor: colors.accent.red,
      agendaDayTextColor: colors.primary.normal,
      agendaDayNumColor: colors.primary.normal,
      agendaTodayColor: colors.primary.normal,
      todayTextColor: colors.accent.red,
      backgroundColor: colors.secondary.dark,
      textSectionTitleColor: colors.primary.dark,
      selectedDayBackgroundColor: colors.accent.red,
      selectedDayTextColor: colors.primary.light,
      dayTextColor: colors.primary.normal,
      arrowColor: colors.accent.red,
      monthTextColor: colors.primary.dark,
      dotColor: colors.accent.red,
      selectedDotColor: colors.accent.white
    }}
  />
)

export default Calendar;
