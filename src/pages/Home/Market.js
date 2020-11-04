import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import _ from 'lodash';

import Product from '../../components/Product';

const products = require('../../../assets/products.json');

const Market = () => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeArea();
  // const categories = _.uniq(products.map((p) => p.category));
  const sections = products.reduce((arr, product) => {
    const pIndex = arr.findIndex((p) => p.title === product.category);
    if (pIndex < 0)
      return [...arr, { title: product.category, data: [product] }];
    arr[pIndex].data.push(product);
    return arr;
  }, []);
  // return null;
  return (
    <FlatList
      data={sections}
      contentContainerStyle={{ paddingTop, paddingBottom: 12 }}
      keyExtractor={(item) => item.title}
      renderItem={({ item: sectionData }) => (
        <>
          <Text style={{ marginLeft: 12, marginTop: 24, marginBottom: 12, fontSize: 22 }}>
            {sectionData.title}
          </Text>
          <FlatList
            contentContainerStyle={{ marginLeft: 12 }}
            data={_.orderBy(sectionData.data, 'order', 'asc')}
            renderItem={({ item: product }) => <Product {...{ product }} />}
            keyExtractor={({ id }) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>
      )}
    />
  );
};

export default Market;
