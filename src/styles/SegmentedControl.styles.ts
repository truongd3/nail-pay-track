import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  segment: {
    borderWidth: 1.5,
    borderColor: '#e5e2d9',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  segmentSelected: {
    borderColor: '#5a9c6f',
    backgroundColor: '#eaf3ec',
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5a5a5a',
  },
  segmentTextSelected: {
    color: '#5a9c6f',
  },
});