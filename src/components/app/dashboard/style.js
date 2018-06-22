import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.dark,
  },
  data: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 30,
  },
  letter: {
    textAlign: 'center',
    color: colors.accent.white,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 30
  },
  metric: {
    marginTop: 200
  },
  button: {
    marginTop: 180
  }
});

export default style;
