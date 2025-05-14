/**
 * Global theme configuration for the Merishiksha Mobile App
 */

export const COLORS = {
  primary: '#0A0A29',        // Primary black
  primaryViolet: '#4F46E5',  // Primary violet
  accentTeal: '#14B8A6',     // Accent teal
  white: '#FFFFFF',
  black: '#000000',
  gray: '#6B7280',
  lightGray: '#E5E7EB',
  darkGray: '#1F2937',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
  info: '#3B82F6',
  transparent: 'transparent',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export const SIZES = {
  // Font sizes
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  
  // Spacing
  padding: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  margin: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  
  // Border radius
  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    round: 999,
  },
};

export const FONTS = {
  regular: {
    fontFamily: 'System',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  bold: {
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  light: {
    fontFamily: 'System',
    fontWeight: '300',
  },
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 8,
  },
};

const theme = { COLORS, SIZES, FONTS, SHADOWS };

export default theme;
