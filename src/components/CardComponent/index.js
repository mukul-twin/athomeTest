import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { INFO_VIEW } from '../../navigation/routes';
import CustomFields from '../CustomFields';

const CardComponent = props => {
  const { item, navigation } = props || {};
  const { name, age, email, balance, isActive } = item || {};
  return (
    <View style={styles.container}>
      <View style={[styles.item(isActive), styles.shadowProp]}>
        <View style={styles.content}>
          <CustomFields isActive={isActive} title={'Name'} desc={name} />
          <CustomFields isActive={isActive} title={'Age'} desc={age} />
          <CustomFields isActive={isActive} title={'Email'} desc={email} />
          <CustomFields isActive={isActive} title={'Balance'} desc={balance} />
        </View>
        <TouchableOpacity
          style={styles.showMoreStyle}
          onPress={() => {
            navigation.navigate(INFO_VIEW, { item });
          }}>
          <Text style={styles.showMoreText}>{'show more'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardComponent;
