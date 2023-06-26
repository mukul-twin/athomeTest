import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Header = props => {
  const { title, backButton = false, navigation = {} } = props || {};
  return (
    <View>
      {backButton ? (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.imageView}>
          <Image
            source={require('../../assets/images/icon-back.png')}
            resizeMode="contain"
            style={styles.headerImgStyle}
          />
        </TouchableOpacity>
      ) : null}
      {title ? (
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
