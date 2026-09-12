import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  content: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  dateBlock: {
    alignItems: 'flex-end',
  },
  weekday: {
    fontSize: 12,
    color: colors.textSecondary,
    letterSpacing: 1,
    marginBottom: 4,
  },
  monthDay: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  wageCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
  },
  wageLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    letterSpacing: 1,
    marginBottom: 8,
  },
  wageValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
  },

  deleteLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  deleteLinkText: {
    fontSize: 15,
    color: colors.textSecondary,
    fontWeight: '600',
  },
});