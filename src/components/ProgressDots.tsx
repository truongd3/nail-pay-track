import { View } from 'react-native';
import { createStyles } from '../styles/ProgressDots.styles';
import { useTheme } from '../theme/ThemeContext';

interface ProgressDotsProps {
    total: number;
    current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.row}>
            {Array.from({ length: total }).map((_, index) => (
                <View key={index} style={[styles.dot, index === current && styles.dotActive]}/>
            ))}
        </View>
    );
}