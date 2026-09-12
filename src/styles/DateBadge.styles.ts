import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  badge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.divider,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayAbbrev: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});