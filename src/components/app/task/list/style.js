import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import colors from '../../../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.normal,
  },
  tasks: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendar: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 10
  },
  emptyDate: {
    flex: 1,
    justifyContent: 'center'
  },
  phrase: {
    color: colors.accent.white,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  emptyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
});

export default style;
