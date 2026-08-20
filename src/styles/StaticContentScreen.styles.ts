import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content: { paddingBottom: 40 },
    header: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 20 },
    headerTitle: { fontSize: 20, fontWeight: '700', color: '#1a1a2e' },
    card: { backgroundColor: '#fff', borderRadius: 14, padding: 16, marginBottom: 12 },
    question: { fontSize: 15, fontWeight: '700', color: '#1a1a2e', marginBottom: 6 },
    answer: { fontSize: 14, color: '#5a5a5a', lineHeight: 20 },
});