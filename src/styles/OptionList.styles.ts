import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  list: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
  },
  rowSelected: {
    borderWidth: 2,
    borderColor: colors.accent,
  },
  label: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  labelSelected: {
    fontWeight: '700',
  },
});