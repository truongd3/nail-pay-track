import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  rowDivider: {
    borderTopWidth: 1,
    borderTopColor: '#f0ede4',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5a5a5a',
    letterSpacing: 0.5,
  },
});