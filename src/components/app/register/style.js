import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.dark,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
  },
  logo: {
    height: 200,
    width: 200
  },
  message: {
    color: colors.accent.white,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 30
  }
});

export default style;
