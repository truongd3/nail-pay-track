import { View } from 'react-native';
import { styles } from '../styles/ProgressDots.styles';

interface ProgressDotsProps {
    total: number;
    current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
    return (
        <View style={styles.row}>
            {Array.from({ length: total }).map((_, index) => (
                <View key={index} style={[styles.dot, index === current && styles.dotActive]}/>
            ))}
        </View>
    );
}