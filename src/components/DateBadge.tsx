import { View, Text } from 'react-native';
import { createStyles } from '../styles/DateBadge.styles';
import { useTheme } from '../theme/ThemeContext';

interface DateBadgeProps {
    dayAbbrev: string; // "TUE"
    dayNumber: string; // "7"
}

export default function DateBadge({ dayAbbrev, dayNumber }: DateBadgeProps) {
    const colors = useTheme();
    const styles = createStyles(colors);
    return (
        <View style={styles.badge}>
            <Text style={styles.dayAbbrev}>{dayAbbrev}</Text>
            <Text style={styles.dayNumber}>{dayNumber}</Text>
        </View>
    );
}