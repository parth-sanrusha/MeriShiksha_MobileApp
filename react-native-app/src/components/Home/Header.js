import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>MeriShiksha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
