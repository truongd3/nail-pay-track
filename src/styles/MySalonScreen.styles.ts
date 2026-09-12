import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  content: { paddingBottom: 40 },
  hint: { fontSize: 13, color: colors.textSecondary, marginTop: -6, marginBottom: 20, lineHeight: 18 },
});