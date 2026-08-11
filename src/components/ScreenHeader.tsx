import { View, Text } from 'react-native';
import { styles } from '../styles/ScreenHeader.styles';

interface ScreenHeaderProps {
  label: string;
  title: string;
}

export default function ScreenHeader({ label, title }: ScreenHeaderProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}