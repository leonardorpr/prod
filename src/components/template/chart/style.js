import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    height: 200
  },
  letterMetric: {
    textAlign: 'center',
    color: colors.primary.light,
    fontSize: 14,
    marginTop: 5
  }
});

export default style;
