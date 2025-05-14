import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, SHADOWS } from '../../styles/theme';

/**
 * A reusable button component with multiple variants
 * @param {Object} props - Component props
 * @param {string} props.title - Button text
 * @param {Function} props.onPress - Function to call when button is pressed
 * @param {Object} props.style - Additional styles for the button
 * @param {Object} props.textStyle - Additional styles for the button text
 * @param {boolean} props.gradient - Whether to use gradient background
 * @param {Array} props.colors - Gradient colors (if gradient is true)
 * @param {string} props.variant - Button variant ('primary', 'secondary', 'outline')
 * @param {boolean} props.loading - Whether to show loading indicator
 * @param {boolean} props.disabled - Whether the button is disabled
 */
const Button = ({
  title,
  onPress,
  style,
  textStyle,
  gradient = false,
  colors = [COLORS.accentTeal, COLORS.primaryViolet],
  variant = 'primary',
  loading = false,
  disabled = false,
}) => {
  // Determine button styles based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      default:
        return styles.primaryButton;
    }
  };

  // Determine text styles based on variant
  const getTextStyles = () => {
    switch (variant) {
      case 'outline':
        return styles.outlineButtonText;
      default:
        return styles.buttonText;
    }
  };

  const buttonContent = (
    <>
      {loading ? (
        <ActivityIndicator size="small" color={variant === 'outline' ? COLORS.accentTeal : COLORS.white} />
      ) : (
        <Text style={[getTextStyles(), textStyle]}>{title}</Text>
      )}
    </>
  );

  return (
    <TouchableOpacity
      style={[getButtonStyles(), disabled && styles.disabledButton, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {gradient && !disabled ? (
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientContainer}
        >
          {buttonContent}
        </LinearGradient>
      ) : (
        buttonContent
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: COLORS.accentTeal,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: SIZES.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.medium,
  },
  secondaryButton: {
    backgroundColor: COLORS.primaryViolet,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: SIZES.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.medium,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: SIZES.radius.md,
    borderWidth: 1,
    borderColor: COLORS.accentTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.gray,
    opacity: 0.6,
  },
  buttonText: {
    ...FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.md,
  },
  outlineButtonText: {
    ...FONTS.medium,
    color: COLORS.accentTeal,
    fontSize: SIZES.md,
  },
  gradientContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: SIZES.radius.md,
  },
});

export default Button;
