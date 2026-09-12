import { View, Text, Pressable } from 'react-native';
import { createStyles } from '../styles/SegmentedControl.styles';
import { useTheme } from '../theme/ThemeContext';

interface Option {
    label: string;
    value: string;
}

interface SegmentedControlProps {
    options: Option[];
    selectedValue: string;
    onSelect: (value: string) => void;
}

export default function SegmentedControl({ options, selectedValue, onSelect }: SegmentedControlProps) {
    const colors = useTheme();
    const styles = createStyles(colors);
    
    return (
        <View style={styles.row}>
            {options.map((option) => {
                const isSelected = option.value === selectedValue;
                return (
                    <Pressable
                        key={option.value}
                        style={[styles.segment, isSelected && styles.segmentSelected]}
                        onPress={() => onSelect(option.value)}
                    >
                        <Text style={[styles.segmentText, isSelected && styles.segmentTextSelected]}>{option.label}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}