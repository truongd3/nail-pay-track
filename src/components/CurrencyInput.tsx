import { View, Text, TextInput } from 'react-native';
import { createStyles } from '../styles/CurrencyInput.styles';
import { useTheme } from '../theme/ThemeContext';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function CurrencyInput({ label, value, onChangeText }: CurrencyInputProps) {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.inputCard}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputRow}>
        <Text style={styles.dollarSign}>$</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          placeholderTextColor={colors.textSecondary}
          keyboardType="decimal-pad"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}