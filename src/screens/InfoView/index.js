import { Image, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { CustomFields, Header } from '../../components';
import { imagesArray } from '../../utils/constants/constants';
import { styles } from './styles';

const InfoView = props => {
  const { item } = props?.route?.params || {};
  const { navigation } = props || {};
  const { name, age, email, balance, about, favoriteFruit } = item || {};
  return (
    <View style={styles.mainView}>
      <Header navigation={navigation} backButton={true} />
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={imagesArray[Math.floor(Math.random() * imagesArray.length)]}
          resizeMode="cover"
        />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <CustomFields detailsView={true} title={'Name'} desc={name} />
        <CustomFields detailsView={true} title={'Age'} desc={age} />
        <CustomFields detailsView={true} title={'Email'} desc={email} />
        <CustomFields detailsView={true} title={'Balance'} desc={balance} />
        <CustomFields
          detailsView={true}
          title={'Favorite Fruit'}
          desc={favoriteFruit}
        />
        <CustomFields detailsView={true} title={'About'} desc={about} />
      </ScrollView>
    </View>
  );
};

export default InfoView;
