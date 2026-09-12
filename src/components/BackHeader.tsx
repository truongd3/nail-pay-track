import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createStyles } from '../styles/BackHeader.styles';
import { useTheme } from '../theme/ThemeContext';

interface BackHeaderProps {
    title: string;
    onBack?: () => void;
}

export default function BackHeader({ title, onBack }: BackHeaderProps) {
    const colors = useTheme();
    const styles = createStyles(colors);
    const navigation = useNavigation<any>();

    return (
        <View style={styles.header}>
            <Pressable onPress={onBack ?? (() => navigation.goBack())} hitSlop={8}>
                <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
            </Pressable>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}