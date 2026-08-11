import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e2d9',
    marginBottom: 4,
  },
  cell: {
    flex: 1,
    fontSize: 11,
    fontWeight: '600',
    color: '#9a9a9a',
    letterSpacing: 0.5,
  },
  monthCell: {
    flex: 1.4,
  },
});