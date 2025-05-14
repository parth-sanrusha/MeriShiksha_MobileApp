import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SHADOWS, SIZES } from '../../styles/theme';

/**
 * A reusable card component with gradient background and shadow
 * @param {Object} props - Component props
 * @param {Object} props.style - Additional styles for the card
 * @param {boolean} props.gradient - Whether to use gradient background
 * @param {Array} props.colors - Gradient colors (if gradient is true)
 * @param {Function} props.onPress - Function to call when card is pressed
 * @param {React.ReactNode} props.children - Card content
 */
const Card = ({
  style,
  gradient = false,
  colors = [COLORS.primary, COLORS.primaryViolet],
  onPress,
  children,
}) => {
  const CardComponent = () => (
    <View style={[styles.card, style]}>
      {gradient ? (
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBackground}
        >
          {children}
        </LinearGradient>
      ) : (
        children
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <CardComponent />
      </TouchableOpacity>
    );
  }

  return <CardComponent />;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: SIZES.radius.md,
    overflow: 'hidden',
    backgroundColor: COLORS.darkGray,
    ...SHADOWS.medium,
  },
  gradientBackground: {
    width: '100%',
    height: '100%',
    padding: SIZES.padding.md,
  },
});

export default Card;
