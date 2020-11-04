import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import _ from 'lodash';

import Product from '../../components/Product';
import { TouchableOpacity } from 'react-native';

const products = require('../../../assets/products.json');

const Market = ({ navigation }) => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeArea();

  const sections = products.reduce((arr, product) => {
    const pIndex = arr.findIndex((p) => p.title === product.category);
    if (pIndex < 0)
      return [...arr, { title: product.category, data: [product] }];
    arr[pIndex].data.push(product);
    return arr;
  }, []);

  const renderProduct = ({ item: product }) => {
    const viewProductDetail = () =>
      navigation.navigate('ProductDetail', { product });
    return (
      <TouchableOpacity onPress={viewProductDetail}>
        <Product {...{ product }} />
      </TouchableOpacity>
    );
  };

  const renderSection = ({ item: sectionData }) => (
    <>
      <Text
        style={{
          marginLeft: 12,
          marginTop: 24,
          marginBottom: 12,
          fontSize: 22,
        }}>
        {sectionData.title}
      </Text>
      <FlatList
        contentContainerStyle={{ marginLeft: 12 }}
        data={_.orderBy(sectionData.data, 'order', 'asc')}
        renderItem={renderProduct}
        keyExtractor={({ id }) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );

  return (
    <FlatList
      data={sections}
      contentContainerStyle={{ paddingTop, paddingBottom: 12 }}
      keyExtractor={(item) => item.title}
      renderItem={renderSection}
    />
  );
};

export default Market;
