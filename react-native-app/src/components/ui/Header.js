import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../../styles/theme';

/**
 * A reusable header component for screens
 * @param {Object} props - Component props
 * @param {string} props.title - Header title
 * @param {Function} props.onBackPress - Function to call when back button is pressed
 * @param {boolean} props.showBack - Whether to show back button
 * @param {Object} props.style - Additional styles for the header
 */
const Header = ({
  title,
  onBackPress,
  showBack = false,
  style,
}) => {
  return (
    <View style={[styles.header, style]}>
      {showBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding.lg,
    backgroundColor: COLORS.primary,
    ...SHADOWS.medium,
  },
  title: {
    ...FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.white,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: SIZES.padding.lg,
    zIndex: 10,
  },
  backButtonText: {
    ...FONTS.bold,
    fontSize: SIZES.h2,
    color: COLORS.white,
  },
});

export default Header;
