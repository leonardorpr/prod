import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  main: {
    textAlign: 'center',
    height: 70,
    width: 300,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: colors.primary.normal,
    borderRadius: 35,
    color: colors.primary.light,
    backgroundColor : 'transparent'
  }
});

export default style;
