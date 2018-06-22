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
  card: {
    position: 'absolute',
    width: '15%',
    height: 75,
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
    backgroundColor: colors.accent.red
  },
  informations: {
    height: 75,
    width: '85%',
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    backgroundColor: colors.secondary.normal,
    marginLeft: '2%'
  },
  task: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  titleTask: {
    fontWeight: 'bold',
    color: colors.accent.white
  }
});

export default style;
