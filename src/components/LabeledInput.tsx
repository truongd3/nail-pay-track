import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import { styles } from '../styles/LabeledInput.styles';

interface LabeledInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export default function LabeledInput({
    label,
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    autoCapitalize = 'sentences',
}: LabeledInputProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#d0d0d0"
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}