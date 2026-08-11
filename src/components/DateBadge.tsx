import { View, Text } from 'react-native';
import { styles } from '../styles/DateBadge.styles';

interface DateBadgeProps {
    dayAbbrev: string; // "TUE"
    dayNumber: string; // "7"
}

export default function DateBadge({ dayAbbrev, dayNumber }: DateBadgeProps) {
    return (
        <View style={styles.badge}>
            <Text style={styles.dayAbbrev}>{dayAbbrev}</Text>
            <Text style={styles.dayNumber}>{dayNumber}</Text>
        </View>
    );
}