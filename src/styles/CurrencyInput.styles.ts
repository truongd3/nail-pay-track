import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  inputLabel: {
    fontSize: 11,
    color: '#9a9a9a',
    letterSpacing: 1,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollarSign: {
    fontSize: 28,
    color: '#333',
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: '#1a1a2e',
    padding: 0,
  },
});