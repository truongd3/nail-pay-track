import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/CurrencyInput.styles';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function CurrencyInput({ label, value, onChangeText }: CurrencyInputProps) {
  return (
    <View style={styles.inputCard}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputRow}>
        <Text style={styles.dollarSign}>$</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          placeholderTextColor="#d0d0d0"
          keyboardType="decimal-pad"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}