import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  label: { fontSize: 16, color: '#1a1a2e', fontWeight: '600' },
});