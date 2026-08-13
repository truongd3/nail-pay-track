import { View, Text, Image } from 'react-native';
import { styles } from '../styles/Avatar.styles';

interface AvatarProps {
    initials: string;
    imageUri?: string | null;
}

export default function Avatar({ initials, imageUri }: AvatarProps) {
    if (imageUri) {
        return <Image source={{ uri: imageUri }} style={styles.avatarImage} />;
    }

    return (
        <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
        </View>
    );
}