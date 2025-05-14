import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => console.log('Navigate to Home')}>
      <Text style={styles.buttonText}>Home</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeButton;
