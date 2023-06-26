import { Platform } from 'react-native';

export const imagesArray = [
  require('../../assets/images/icon-beach.png'),
  require('../../assets/images/icon-track.jpg'),
  require('../../assets/images/icon-view.jpg'),
  require('../../assets/images/icon-mumbai.jpg'),
  require('../../assets/images/icon-tower.jpeg'),
];

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const isAndroid = () => {
  return Platform.OS === 'android';
};
