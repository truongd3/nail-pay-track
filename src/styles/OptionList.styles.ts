import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
  },
  rowSelected: {
    borderWidth: 2,
    borderColor: '#5a9c6f',
  },
  label: {
    fontSize: 16,
    color: '#1a1a2e',
  },
  labelSelected: {
    fontWeight: '700',
  },
});