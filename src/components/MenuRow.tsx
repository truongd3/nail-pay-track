import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/MenuRow.styles';

interface MenuRowProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
    right?: React.ReactNode;
}

export default function MenuRow({ icon, label, onPress, right }: MenuRowProps) {
    return (
        <Pressable style={styles.row} onPress={onPress}>
            <View style={styles.left}>
                <Ionicons name={icon} size={20} color="#5a9c6f" />
                <Text style={styles.label}>{label}</Text>
            </View>
            {right ?? <Ionicons name="chevron-forward" size={18} color="#c0c0c0" />}
        </Pressable>
    );
}