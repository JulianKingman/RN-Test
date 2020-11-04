import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, Image } from 'react-native';
import color from 'color';
import { formatPrice } from '../../utility';

const products = require('../../../assets/products.json');

const Product = ({
  product: { image, name, price, description, discount, discount_type },
}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        defaultSource={require('../../../assets/placeholder.png')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: 12,
          backgroundColor: color('#282828').alpha(0.8).toString(),
        }}>
        <Text numberOfLines={1} style={{ color: 'white' }}>
          {name}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: 'white',
              textDecorationLine: discount_type ? 'line-through' : 'none',
              marginRight: 6,
            }}>
            {formatPrice(price)}
          </Text>
          {discount_type ? (
            <Text style={{ color: 'white' }}>
              {formatPrice(
                discount_type === 'percentage'
                  ? (discount * price) / 100
                  : price - discount,
              )}
            </Text>
          ) : null}
        </View>
        <Text numberOfLines={1} style={{ fontSize: 12, color: '#bdbdbd' }}>
          {description}
        </Text>
        <Image style={{ position: 'absolute', right: 24, top: 24 }} />
      </View>
    </View>
  );
};

Product.defaultProps = {
  product: products[1],
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 24,
  },
});

export default Product;
