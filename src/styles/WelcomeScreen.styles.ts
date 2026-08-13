import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 100,
  },
  welcomeLabel: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5a9c6f',
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
    color: '#5a5a5a',
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
    color: '#9a9a9a',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 12,
  },
});