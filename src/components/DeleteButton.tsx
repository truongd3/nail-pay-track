import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStyles } from '../styles/DeleteButton.styles';
import { useTheme } from '../theme/ThemeContext';

interface DeleteButtonProps {
    onPress: () => void;
}

export default function DeleteButton({ onPress }: DeleteButtonProps) {
    const colors = useTheme();
    const styles = createStyles(colors);
    return (
        <Pressable style={styles.deleteButton} onPress={onPress} hitSlop={8}>
            <Ionicons name="trash-outline" size={20} color={colors.textSecondary} />
        </Pressable>
    );
}