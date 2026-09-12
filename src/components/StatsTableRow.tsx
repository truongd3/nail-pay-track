import { View, Text } from 'react-native';
import { createStyles } from '../styles/StatsTableRow.styles';
import { useTheme } from '../theme/ThemeContext';

interface StatsTableRowProps {
    monthLabel: string;
    tip: number;
    received: number;
    unpaid: number;
}

export default function StatsTableRow({ monthLabel, tip, received, unpaid }: StatsTableRowProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.row}>
            <Text style={[styles.cell, styles.monthCell, styles.monthText]}>
                {monthLabel}
            </Text>
            <Text style={[styles.cell, styles.tipText]}>${tip.toFixed(2)}</Text>
            <Text style={styles.cell}>${received.toFixed(2)}</Text>
            <Text style={styles.cell}>${unpaid.toFixed(2)}</Text>
        </View>
    );
}