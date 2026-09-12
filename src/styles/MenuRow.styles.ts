import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  left: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12 
  },
  label: { 
    fontSize: 16, 
    color: colors.textPrimary,
    fontWeight: '600' 
  },
});