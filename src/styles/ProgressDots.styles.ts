import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 6,
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#e5e2d9',
  },
  dotActive: {
    backgroundColor: '#5a9c6f',
    width: 24,
  },
});