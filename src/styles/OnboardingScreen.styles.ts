import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
  },
  stepTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  stepSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 24,
  },
  avatarPreviewWrap: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  avatarCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.accent,
  },
  avatarImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  uploadButton: {
    alignSelf: 'center',
    backgroundColor: colors.card,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  uploadButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  buttonRow: {
    marginTop: 'auto',
    gap: 10,
  },

  stepHint: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: -8,
    marginBottom: 10,
    lineHeight: 18,
  },
});