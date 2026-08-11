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
    marginTop: 10,
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8e6e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarPlaceholderText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },
  
  monthLabel: {
    fontSize: 12,
    color: '#9a9a9a',
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1a1a2e',
  },

  saveButton: {
    backgroundColor: '#5a9c6f',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#5a9c6f',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },

  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  activityCount: {
    fontSize: 13,
    color: '#5a9c6f',
  },
  entryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
  },
  entryWeekday: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  entryDate: {
    fontSize: 13,
    color: '#9a9a9a',
    marginTop: 2,
  },
});