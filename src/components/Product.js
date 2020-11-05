import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  Value,
  timing,
  Easing,
} from 'react-native-reanimated';

import Price from './Price';
import { colors, spacing, textStyles } from '../utility/universalStyles';

const products = require('../../assets/products.json');

const Product = ({ product, focused }) => {
  const {
    id,
    image,
    name,
    price,
    description,
    discount,
    discount_type,
  } = product;
  const productWidth = Dimensions.get('window').width * 0.618;
  const navigation = useNavigation();
  // With the SharedElements transition, the Opacity makes it look less glitchy on iOS
  const [opacity, setOpacity] = useState(1);
  const hovering = new Value(0);

  useEffect(() => {
    if (focused)
      setTimeout(() => {
        setOpacity(1);
      }, 300);
  }, [focused]);

  // Add hovering scale effect
  const onPressIn = () => {
    timing(hovering, {
      duration: 300,
      toValue: 1,
      easing: Easing.out(Easing.ease),
    }).start();
  };
  // End hovering scale effect
  const onPressOut = () => {
    timing(hovering, {
      duration: 300,
      toValue: 0,
      easing: Easing.in(Easing.ease),
    }).start();
  };
  // Navigate
  const onPress = () => {
    setOpacity(0);
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <Animated.View
      style={{
        padding: spacing.md,
        shadowOpacity: hovering.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.6],
          extrapolate: Extrapolate.CLAMP,
        }),
        shadowRadius: hovering.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 3],
          extrapolate: Extrapolate.CLAMP,
        }),
        elevation: hovering.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 3],
          extrapolate: Extrapolate.CLAMP,
        }),
        shadowOffset: {
          width: 0,
          height: 3,
        },
        transform: [
          {
            scale: hovering.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.08],
              extrapolate: Extrapolate.CLAMP,
            }),
          },
        ],
      }}>
      <TouchableWithoutFeedback
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}>
        <View
          style={[
            styles.card,
            {
              width: productWidth,
              height: productWidth * (3 / 4),
              opacity: Platform.OS === 'ios' ? opacity : 1,
            },
          ]}>
          <SharedElement id={`${id}-image`}>
            <Image
              source={{ uri: image }}
              defaultSource={require('../../assets/placeholder.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </SharedElement>
          <View style={styles.infoBar}>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={1} style={textStyles.white}>
                {name}
              </Text>
              <Price
                {...{ price, discount_type, discount }}
                style={{ ...textStyles.white }}
              />
              <Text numberOfLines={1} style={textStyles.subtle}>
                {description}
              </Text>
            </View>
            <Image
              defaultSource={require('../../assets/DefaultAvatar.png')}
              source={require('../../assets/DefaultAvatar.png')}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

Product.defaultProps = {
  product: products[1],
};

const styles = StyleSheet.create({
  avatar: {
    marginLeft: spacing.md,
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  card: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  infoBar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: spacing.md,
    backgroundColor: colors.overlay,
    flexDirection: 'row',
  },
});

export default Product;
