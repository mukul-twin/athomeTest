import { StyleSheet } from 'react-native';
import {
  COLOR_DARK_BLUE,
  COLOR_DARK_BLUE_1,
  COLOR_GREY,
  COLOR_GREY_1,
} from '../../utils/helper/colors';
import { moderateScale } from '../../utils/helper';

export const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    marginBottom: moderateScale(15),
  },
  title: isActive => ({
    letterSpacing: 0,
    marginRight: moderateScale(5),
    fontWeight: '600',
    color: isActive ? COLOR_DARK_BLUE : COLOR_GREY_1,
  }),
  descirption: isActive => ({
    marginBottom: moderateScale(4),
    color: isActive ? COLOR_DARK_BLUE_1 : COLOR_GREY,
    letterSpacing: 0,
    flexWrap: 'wrap',
  }),
  textContainer_2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: moderateScale(20),
    justifyContent: 'space-between',
  },
  title_2: {
    letterSpacing: 0,
    marginRight: moderateScale(5),
    fontWeight: '600',
    color: COLOR_GREY_1,
    flex: 0.4,
  },
  descirption_2: {
    marginBottom: moderateScale(4),
    color: COLOR_GREY,
    letterSpacing: 0,
    flex: 0.6,
    textAlign: 'justify',
  },
});
