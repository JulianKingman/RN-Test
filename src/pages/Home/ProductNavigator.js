import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ProductDetail from '../ProductDetail';
import Market from './Market';

const SharedStack = createSharedElementStackNavigator();

const ProductNavigator = () => {
  return (
    <SharedStack.Navigator
      initialRouteName="Market"
      headerMode="none"
      mode="modal">
      <SharedStack.Screen name="Market" component={Market} />
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
};

export default ProductNavigator;
