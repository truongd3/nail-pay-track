import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  weekday: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  date: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
});