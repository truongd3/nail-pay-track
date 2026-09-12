import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  amounts: {
    alignItems: 'flex-end',
  },
  money: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  tip: {
    fontSize: 13,
    color: colors.accent,
    marginTop: 2,
  },
});