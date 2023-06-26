import { StyleSheet } from 'react-native';
import { getDeviceWidth, moderateScale } from '../../utils/helper';
import {
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_GREY,
  COLOR_GREY_1,
  COLOR_LIGHT_GREY,
  COLOR_WHITE,
} from '../../utils/helper/colors';
import { isIOS } from '../../utils/constants/constants';

export const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: isActive => ({
    flexDirection: 'row',
    width: getDeviceWidth() * 0.95,
    borderRadius: moderateScale(16),
    marginBottom: moderateScale(10),
    backgroundColor: isActive ? COLOR_WHITE : COLOR_LIGHT_GREY,
    borderColor: isActive ? COLOR_DARK_BLUE : COLOR_BLACK,
    borderWidth: 1,
  }),
  content: {
    flex: 1,
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
  },
  shadowProp: {
    shadowColor: COLOR_GREY_1,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingHorizontal: moderateScale(20),
  },
  showMoreStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 0.2,
    borderRadius: moderateScale(10),
    shadowColor: COLOR_GREY,
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 1.77,
    shadowRadius: 4.65,
    elevation: 6,
    height: moderateScale(20),
    width: moderateScale(80),
  },
  showMoreText: { 
    fontWeight: isIOS() ? '300' : '400' 
  },
});
