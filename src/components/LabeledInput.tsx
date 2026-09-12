import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import { createStyles } from '../styles/LabeledInput.styles';
import { useTheme } from '../theme/ThemeContext';

interface LabeledInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export default function LabeledInput({ label, value, onChangeText, placeholder, keyboardType = 'default', autoCapitalize = 'sentences' }: LabeledInputProps) {
    const colors = useTheme();
    const styles = createStyles(colors);
    
    return (
        <View style={styles.card}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.textSecondary}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}