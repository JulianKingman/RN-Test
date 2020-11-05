import React from 'react';
import { SafeAreaView, Text, Linking, StyleSheet } from 'react-native';
import { spacing } from '../utility/universalStyles';

const Info = () => (
  <SafeAreaView style={styles.wrapper}>
    <Text>Follow the instructions in the README file at:</Text>
    <Text
      style={styles.link}
      onPress={() => {
        Linking.openURL(
          'https://github.com/mypthub/rn-code-test/blob/master/README.md',
        );
      }}>
      https://github.com/mypthub/rn-code-test/blob/master/README.md
    </Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  wrapper: { padding: spacing.md },
  link: {
    color: 'blue',
  },
});

export default Info;
