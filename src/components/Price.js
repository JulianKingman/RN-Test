import React from 'react';
import { View, Text } from 'react-native';

import { formatPrice } from '../utility';
import { spacing } from '../utility/universalStyles';

const Price = ({ price, discount, discount_type, style = {} }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text
        style={{
          textDecorationLine: discount_type ? 'line-through' : 'none',
          ...style,
        }}>
        {formatPrice(price)}
      </Text>
      {discount_type ? (
        <Text
          style={{
            marginLeft: spacing.sm,
            ...style,
          }}>
          {formatPrice(
            discount_type === 'percentage'
              ? price - price * (discount / 100)
              : price - discount,
          )}
        </Text>
      ) : null}
    </View>
  );
};

export default Price;
