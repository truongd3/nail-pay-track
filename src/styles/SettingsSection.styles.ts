import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  section: { marginBottom: 28 },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSecondary,
    letterSpacing: 1,
    marginBottom: 10,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    overflow: 'hidden',
  },
});