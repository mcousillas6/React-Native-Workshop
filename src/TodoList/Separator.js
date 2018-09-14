import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: '#EEEEEE',
    marginLeft: 18,
    marginRight: 12,
  },
});

const Separator = () => (
  <View style={styles.separator} />
);

export default Separator;
