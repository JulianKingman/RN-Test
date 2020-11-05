import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';

import { spacing, textStyles } from '../utility/universalStyles';

const CloseButton = () => {
  const { goBack } = useNavigation();
  const { top: safeTopInset } = useSafeArea();
  return (
    <MaterialIcons
      name="close"
      style={[styles.icon, { top: safeTopInset + spacing.sm }]}
      onPress={goBack}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    ...textStyles.title,
    ...textStyles.white,
    position: 'absolute',
    right: spacing.md,
  },
});

export default CloseButton;
