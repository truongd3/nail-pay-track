import { View, Text } from 'react-native';
import { styles } from '../styles/StatsTableHeader.styles';

export default function StatsTableHeader() {
    return (
        <View style={styles.row}>
            <Text style={[styles.cell, styles.monthCell]}>MONTH</Text>
            <Text style={styles.cell}>TIPS</Text>
            <Text style={styles.cell}>RECEIVED</Text>
            <Text style={styles.cell}>UNPAID</Text>
        </View>
    );
}