import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
  },
  monthCell: {
    flex: 1.4,
  },
  monthText: {
    fontWeight: '600',
  },
  tipText: {
    color: colors.accent,
  },
});