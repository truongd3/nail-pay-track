import { View, Text } from 'react-native';
import { createStyles } from '../styles/ScreenHeader.styles';
import { useTheme } from '../theme/ThemeContext';

interface ScreenHeaderProps {
    label: string;
    title: string;
}

export default function ScreenHeader({ label, title }: ScreenHeaderProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}