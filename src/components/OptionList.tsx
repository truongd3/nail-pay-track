import { View, Text, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/OptionList.styles';

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
                        {isSelected && <Ionicons name="checkmark-circle" size={20} color="#5a9c6f" />}
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}