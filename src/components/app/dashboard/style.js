import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.dark,
  },
  data: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 30
  },
  letter: {
    textAlign: 'center',
    color: colors.accent.white,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 30
  }
});

export default style;
