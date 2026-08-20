import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/BackHeader.styles';

interface BackHeaderProps {
    title: string;
    onBack?: () => void;
}

export default function BackHeader({ title, onBack }: BackHeaderProps) {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.header}>
            <Pressable onPress={onBack ?? (() => navigation.goBack())} hitSlop={8}>
                <Ionicons name="arrow-back" size={24} color="#1a1a2e" />
            </Pressable>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}