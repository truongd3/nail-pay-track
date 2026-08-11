import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eeece5',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: '#1a1a2e',
  },
  monthCell: {
    flex: 1.4,
  },
  monthText: {
    fontWeight: '600',
  },
  tipText: {
    color: '#5a9c6f',
  },
});