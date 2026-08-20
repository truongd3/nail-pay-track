import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: { paddingBottom: 40 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 24 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1a1a2e' },
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 14, padding: 16, marginBottom: 10,
  },
  rowLabel: { fontSize: 15, color: '#1a1a2e', fontWeight: '600' },
  exportRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 14, padding: 16, marginTop: 10,
  },
  exportLabel: { fontSize: 15, color: '#1a1a2e', fontWeight: '600' },
});