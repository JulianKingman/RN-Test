import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeModules } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { spacing, textStyles } from '../utility/universalStyles';

const Native = () => {
  const [key, setKey] = useState('...');
  NativeModules.ServiceKey.get().then(k => setKey(k));
  const { top: paddingTop } = useSafeArea();
  return (
    <View style={{ paddingTop, paddingHorizontal: spacing.md }}>
      <Text style={textStyles.title}>{`Service Key: ${key}`}</Text>
    </View>
  );
};

export default Native;
