import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
    content: { paddingBottom: 40 },
    card: { backgroundColor: colors.card, borderRadius: 14, padding: 16, marginBottom: 12 },
    question: { fontSize: 15, fontWeight: '700', color: colors.textPrimary, marginBottom: 6 },
    answer: { fontSize: 14, color: colors.textMuted, lineHeight: 20 },
});