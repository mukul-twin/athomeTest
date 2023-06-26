import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

const CustomFields = props => {
  const { title, desc, isActive = false, detailsView = false } = props || {};
  return (
    <View style={!detailsView ? styles.textContainer : styles.textContainer_2}>
      <Text
        numberOfLines={1}
        style={!detailsView ? styles.title(isActive) : styles.title_2}>
        {title}
        {':'}
      </Text>
      <Text
        numberOfLines={detailsView ? 0 : 1}
        style={
          !detailsView ? styles.descirption(isActive) : styles.descirption_2
        }>
        {desc}
      </Text>
    </View>
  );
};

export default CustomFields;
