import { StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../utils/helper/colors';
import { moderateScale } from '../../utils/helper';
import { isIOS } from '../../utils/constants/constants';

export const styles = StyleSheet.create({
  headerView: {
    paddingBottom: moderateScale(15),
    borderBottomColor: COLOR_BLACK,
    borderBottomWidth: 1,
    marginBottom: moderateScale(10),
    backgroundColor: COLOR_WHITE,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: moderateScale(30),
    letterSpacing: 4,
    opacity: 0.7,
    color: COLOR_BLACK,
  },
  imageView: {
    height: moderateScale(40),
    width: moderateScale(40),
    alignItems: 'center',
    paddingTop: isIOS() ? 0 : 14,
  },
  headerImgStyle: {
    height: moderateScale(40),
    width: moderateScale(30),
  },
});
