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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSafeArea } from 'react-native-safe-area-context';

const ProductDetail = ({
  route: {
    params: { product },
  },
  navigation: { goBack },
}) => {
  const { id, image, name, description } = product;
  const { width } = Dimensions.get('window');
  const { top: safeTopInset } = useSafeArea();

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <SharedElement id={`${id}-image`}>
        <Image
          source={{ uri: image }}
          style={{ width, height: width * 0.618, marginBottom: 24 }}
          resizeMode="cover"
        />
      </SharedElement>
      <MaterialIcons
        name="close"
        size={22}
        color="white"
        style={{ position: 'absolute', top: safeTopInset, right: 12 }}
        onPress={goBack}
      />
      <View style={{ paddingHorizontal: 12 }}>
        <Text style={{ fontSize: 22, marginBottom: 12 }}>{name}</Text>
        <Text>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
