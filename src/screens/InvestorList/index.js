import { FlatList } from 'react-native';
import React from 'react';
import { CardComponent, Header } from '../../components';
import DummyData from '../../utils/helper/dummyData.json';

const InvestorList = ({ navigation }) => {
  return (
    <>
      <Header title={'Investor List'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DummyData}
        renderItem={({ item }) => {
          return <CardComponent item={item} navigation={navigation} />;
        }}
      />
    </>
  );
};

export default InvestorList;
