import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import color from 'color';
import { formatPrice } from '../../utility';

const products = require('../../../assets/products.json');

const Product = ({
  product: { image, name, price, description, discount, discount_type },
}) => {
  const productWidth = Dimensions.get('window').width * 0.618;
  return (
    <View
      style={[
        styles.card,
        { width: productWidth, height: productWidth * (3 / 4) },
      ]}>
      <Image
        source={{ uri: image }}
        defaultSource={require('../../../assets/placeholder.png')}
        style={styles.image}
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
          flexDirection: 'row',
        }}>
        <View style={{ flex: 1 }}>
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
        </View>
        <Image
          defaultSource={require('../../../assets/DefaultAvatar.png')}
          style={{
            marginLeft: 12,
            width: 24,
            height: 24,
            borderRadius: 24 / 2,
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

Product.defaultProps = {
  product: products[1],
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    width: '100%',
    // aspectRatio: 4 / 3,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
});

export default Product;
