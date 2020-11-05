import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import _ from 'lodash';
import { useIsFocused } from '@react-navigation/native';

import Product from '../components/Product';
import { spacing, textStyles } from '../utility/universalStyles';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const products = require('../../assets/products.json');

const Market = () => {
  // Focus refreshes visibility on iOS
  const focused = useIsFocused();
  const { top: paddingTop } = useSafeArea();

  // Format data for flatlist
  const sections = products.reduce((arr, product) => {
    const pIndex = arr.findIndex(p => p.title === product.category);
    if (pIndex < 0)
      return [...arr, { title: product.category, data: [product] }];
    arr[pIndex].data.push(product);
    return arr;
  }, []);

  const renderProduct = ({ item: product }) => (
    <Product {...{ product, focused }} />
  );
  const renderSection = ({ item: sectionData }) => (
    <>
      <Text
        style={{
          ...textStyles.title,
          marginLeft: spacing.md,
        }}>
        {sectionData.title}
      </Text>
      <FlatList
        contentContainerStyle={{
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.md,
        }}
        style={{ overflow: 'visible' }}
        data={_.orderBy(sectionData.data, 'order', 'asc')}
        renderItem={renderProduct}
        keyExtractor={({ id }) => `product-${id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );

  return (
    <FlatList
      data={sections}
      style={{ overflow: 'visible' }}
      contentContainerStyle={{
        paddingTop,
        paddingBottom: spacing.md,
      }}
      keyExtractor={item => item.title}
      renderItem={renderSection}
    />
  );
};

// Workaround related to https://github.com/IjzerenHein/react-navigation-shared-element/issues/77
const MarketStack = createSharedElementStackNavigator();
const MarketFixed = () => (
  <MarketStack.Navigator>
    <MarketStack.Screen name="Market" component={Market} />
  </MarketStack.Navigator>
);

export default MarketFixed;
