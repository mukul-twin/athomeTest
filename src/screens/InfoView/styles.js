import { StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../utils/helper/colors';
import { moderateScale } from '../../utils/helper';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLOR_BLACK,
    borderBottomWidth: moderateScale(0.5),
    paddingBottom: moderateScale(10),
  },
  tinyLogo: {
    width: moderateScale(200),
    height: moderateScale(200),
    borderRadius: moderateScale(100),
  },
  content: {
    flex: 1,
    paddingTop: moderateScale(30),
    paddingHorizontal: moderateScale(15),
  },
  scrollContainer: {
    paddingBottom: moderateScale(15),
  },
});
