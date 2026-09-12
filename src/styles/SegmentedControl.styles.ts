import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  segment: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  segmentSelected: {
    borderColor: colors.accent,
    backgroundColor: colors.accentSoft,
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textMuted,
  },
  segmentTextSelected: {
    color: colors.accent,
  },
});