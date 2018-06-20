import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  main: {
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
  }
});

export default style;
