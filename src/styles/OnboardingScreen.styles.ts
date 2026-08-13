import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 20,
  },
  stepTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  stepSubtitle: {
    fontSize: 14,
    color: '#9a9a9a',
    marginBottom: 24,
  },
  avatarPicker: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#efece3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    overflow: 'hidden',
  },
  avatarPreview: {
    width: 100,
    height: 100,
  },
  buttonRow: {
    marginTop: 'auto',
    gap: 10,
  },
});