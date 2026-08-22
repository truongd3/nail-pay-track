import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: { paddingBottom: 40 },
  dateSelector: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  dateLabel: {
    fontSize: 11,
    color: '#9a9a9a',
    letterSpacing: 1,
    marginBottom: 8,
  },
  dateValueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
  },
});