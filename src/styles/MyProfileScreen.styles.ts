import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  content: { paddingBottom: 40 },
  avatarWrap: { alignSelf: 'center', marginBottom: 24 },
  avatarCircle: {
    width: 100, height: 100, borderRadius: 50,
    backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center',
  },
  avatarImage: { width: 100, height: 100, borderRadius: 50 },
  avatarInitials: { fontSize: 28, fontWeight: '700', color: colors.accent },
  avatarEditBadge: {
    position: 'absolute', bottom: 0, right: 0,
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: colors.background,
  },
  regionSelector: { backgroundColor: colors.card, borderRadius: 16, padding: 18, marginBottom: 20 },
  regionLabel: { fontSize: 11, color: colors.textSecondary, letterSpacing: 1, marginBottom: 8 },
  regionValueRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  regionValue: { fontSize: 16, color: colors.textPrimary, fontWeight: '600' },
});