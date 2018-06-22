import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    width: '90%',
    marginTop: 5,
    marginBottom: 3,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1
  },
  informations: {
    height: 150,
    width: '95%',
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    backgroundColor: colors.secondary.normal,
    marginLeft: '2%'
  },
  task: {
    marginTop: 10
  },
  value: {
    justifyContent: 'center',
    marginTop: 30
  },
  titleValue: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.accent.red
  },
  titleTask: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.accent.white
  }
});

export default style;
