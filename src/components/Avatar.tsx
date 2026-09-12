import { View, Text, Image } from 'react-native';
import { createStyles } from '../styles/Avatar.styles';
import { useTheme } from '../theme/ThemeContext';

interface AvatarProps {
    initials: string;
    imageUri?: string | null;
}

export default function Avatar({ initials, imageUri }: AvatarProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    if (imageUri) {
        return <Image source={{ uri: imageUri }} style={styles.avatarImage} />;
    }

    return (
        <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
        </View>
    );
}