import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
    content: { paddingBottom: 40 },
    card: { backgroundColor: colors.card, borderRadius: 14, padding: 16, marginBottom: 12 },
    question: { fontSize: 15, fontWeight: '700', color: colors.textPrimary, marginBottom: 6 },
    answer: { fontSize: 14, color: colors.textMuted, lineHeight: 20 },
});

export const markdownStyles = (colors: ThemeColors) => StyleSheet.create({
    body: { color: colors.textMuted, fontSize: 14, lineHeight: 20 },
    heading2: { color: colors.textPrimary, fontSize: 17, fontWeight: '700', marginTop: 16, marginBottom: 8 },
    strong: { fontWeight: '700', color: colors.textPrimary },
    em: { fontStyle: 'italic' },
});