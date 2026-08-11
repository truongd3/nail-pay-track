import { View, Text } from 'react-native';
import { styles } from '../styles/Avatar.styles';

interface AvatarProps {
  initials: string;
}

export default function Avatar({ initials }: AvatarProps) {
  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
  );
}