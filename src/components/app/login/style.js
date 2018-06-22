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
    marginTop: Constants.statusBarHeight
  },
  logo: {
    height: 200,
    width: 200
  },
  socialButtons: {
    marginTop: 10,
  }
});

export default style;
