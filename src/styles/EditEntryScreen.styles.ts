import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    paddingTop: 10,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  dateBlock: {
    alignItems: 'flex-end',
  },
  weekday: {
    fontSize: 12,
    color: '#9a9a9a',
    letterSpacing: 1,
    marginBottom: 4,
  },
  monthDay: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  wageCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
  },
  wageLabel: {
    fontSize: 11,
    color: '#9a9a9a',
    letterSpacing: 1,
    marginBottom: 8,
  },
  wageValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a2e',
  },

  deleteLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  deleteLinkText: {
    fontSize: 15,
    color: '#9a9a9a',
    fontWeight: '600',
  },
});