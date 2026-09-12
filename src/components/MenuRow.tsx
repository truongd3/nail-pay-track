import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStyles } from '../styles/MenuRow.styles';
import { useTheme } from '../theme/ThemeContext';

interface MenuRowProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
    right?: React.ReactNode;
}

export default function MenuRow({ icon, label, onPress, right }: MenuRowProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <Pressable style={styles.row} onPress={onPress}>
            <View style={styles.left}>
                <Ionicons name={icon} size={20} color={colors.accent} />
                <Text style={styles.label}>{label}</Text>
            </View>
            {right ?? <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />}
        </Pressable>
    );
}