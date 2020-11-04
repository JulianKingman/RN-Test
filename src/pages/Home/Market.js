import React from 'react';
import { FlatList } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import Product from '../../components/Product';

const products = require('../../../assets/products.json');

const Market = () => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeArea();
  return (
    <FlatList
      data={products}
      renderItem={({ item: product }) => <Product {...{ product }} />}
      contentContainerStyle={{
        paddingTop,
        paddingHorizontal: 24,
      }}
    />
  );
};

export default Market;
