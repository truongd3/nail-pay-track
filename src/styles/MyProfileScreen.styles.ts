import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: { paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 20 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1a1a2e' },
  avatarWrap: { alignSelf: 'center', marginBottom: 24 },
  avatarCircle: {
    width: 100, height: 100, borderRadius: 50,
    backgroundColor: '#e3ecE6', alignItems: 'center', justifyContent: 'center',
  },
  avatarImage: { width: 100, height: 100, borderRadius: 50 },
  avatarInitials: { fontSize: 28, fontWeight: '700', color: '#5a9c6f' },
  avatarEditBadge: {
    position: 'absolute', bottom: 0, right: 0,
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: '#5a9c6f', alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: '#faf8f3',
  },
  regionSelector: { backgroundColor: '#fff', borderRadius: 16, padding: 18, marginBottom: 20 },
  regionLabel: { fontSize: 11, color: '#9a9a9a', letterSpacing: 1, marginBottom: 8 },
  regionValueRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  regionValue: { fontSize: 16, color: '#1a1a2e', fontWeight: '600' },
});