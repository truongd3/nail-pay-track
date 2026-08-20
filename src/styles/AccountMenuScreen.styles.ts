import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: { fontSize: 22, fontWeight: '700', color: '#1a1a2e' },
  profileSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  profileText: { flex: 1 },
  profileName: { fontSize: 16, fontWeight: '700', color: '#1a1a2e' },
  profileEmail: { fontSize: 13, color: '#9a9a9a', marginTop: 2 },
  section: { marginTop: 4 },
});