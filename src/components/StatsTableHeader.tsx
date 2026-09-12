import { View, Text } from 'react-native';
import { createStyles } from '../styles/StatsTableHeader.styles';
import { useTheme } from '../theme/ThemeContext';

export default function StatsTableHeader() {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.row}>
            <Text style={[styles.cell, styles.monthCell]}>MONTH</Text>
            <Text style={styles.cell}>TIPS</Text>
            <Text style={styles.cell}>RECEIVED</Text>
            <Text style={styles.cell}>UNPAID</Text>
        </View>
    );
}