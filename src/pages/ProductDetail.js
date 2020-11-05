import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Dimensions,
  Text,
  StatusBar,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import CloseButton from '../components/CloseButton';
import Price from '../components/Price';
import { spacing, textStyles } from '../utility/universalStyles';

const ProductDetail = ({
  route: {
    params: { product },
  },
}) => {
  const {
    id,
    image,
    name,
    description,
    price,
    discount,
    discount_type,
  } = product;
  const { width } = Dimensions.get('window');

  return (
    <>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <SharedElement id={`${id}-image`}>
          <Image
            source={{ uri: image }}
            style={{ width, height: width * 0.618, marginBottom: spacing.lg }}
            resizeMode="cover"
          />
        </SharedElement>
        <View style={{ paddingHorizontal: spacing.md }}>
          <Text style={{ ...textStyles.title, marginBottom: spacing.md }}>
            {name}
          </Text>
          <Price
            {...{ price, discount_type, discount }}
            style={{ ...textStyles.subtitle, marginBottom: spacing.md }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: spacing.md,
            }}>
            <Image
              source={require('../../assets/DefaultAvatar.png')}
              style={{
                width: 36,
                height: 36,
                borderRadius: 36 / 2,
                marginHorizontal: spacing.md,
              }}
            />
            <Text>by Jane Doe</Text>
          </View>
          <Text>{description}</Text>
        </View>
      </ScrollView>
      <CloseButton />
    </>
  );
};

export default ProductDetail;
