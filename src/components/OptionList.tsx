import { View, Text, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStyles } from '../styles/OptionList.styles';
import { useTheme } from '../theme/ThemeContext';

interface Option {
    label: string;
    value: string;
}

interface OptionListProps {
    options: Option[];
    selectedValue: string | null;
    onSelect: (value: string) => void;
}

export default function OptionList({ options, selectedValue, onSelect }: OptionListProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
            {options.map((option) => {
                const isSelected = option.value === selectedValue;
                return (
                    <Pressable
                        key={option.value}
                        style={[styles.row, isSelected && styles.rowSelected]}
                        onPress={() => onSelect(option.value)}
                    >
                        <Text style={[styles.label, isSelected && styles.labelSelected]}>{option.label}</Text>
                        {isSelected && <Ionicons name="checkmark-circle" size={20} color={colors.accent} />}
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}