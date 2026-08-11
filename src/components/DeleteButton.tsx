import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/DeleteButton.styles';

interface DeleteButtonProps {
    onPress: () => void;
}

export default function DeleteButton({ onPress }: DeleteButtonProps) {
    return (
        <Pressable style={styles.deleteButton} onPress={onPress} hitSlop={8}>
            <Ionicons name="trash-outline" size={20} color="#9a9a9a" />
        </Pressable>
    );
}