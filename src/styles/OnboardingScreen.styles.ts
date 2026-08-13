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
  avatarPreviewWrap: {
  alignItems: 'center',
  marginTop: 40,
  marginBottom: 20,
},
  avatarCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e3ecE6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 36,
    fontWeight: '700',
    color: '#5a9c6f',
  },
  avatarImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  uploadButton: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  uploadButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  buttonRow: {
    marginTop: 'auto',
    gap: 10,
  },
});