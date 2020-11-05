import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ProductDetail from './ProductDetail';
import Market from './Market';
import HomeTabNavigator from './HomeTabNavigator';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// shared element navigator has a bug on Android (https://github.com/IjzerenHein/react-navigation-shared-element/issues/91)
const SharedStack =
  Platform.OS === 'ios'
    ? createSharedElementStackNavigator()
    : createStackNavigator();

const ProductNavigator = () => (
  <SharedStack.Navigator initialRouteName="Home" headerMode="none" mode="modal">
    <SharedStack.Screen name="Home" component={HomeTabNavigator} />
    <SharedStack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: { opacity: progress },
        }),
      }}
      sharedElements={({
        route: {
          params: {
            product: { id },
          },
        },
      }) => [`${id}-image`]}
    />
  </SharedStack.Navigator>
);

export default ProductNavigator;
