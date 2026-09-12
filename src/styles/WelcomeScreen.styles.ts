import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 100,
  },
  welcomeLabel: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.accent,
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 16,
  },
  logoCard: {
    // backgroundColor: '#d4ead9',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '100%',
    height: 280,
  },
  description: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 28,
    paddingHorizontal: 8,
  },
  bottomSection: {
    marginTop: 'auto',
  },
  setupNote: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 12,
  },
});