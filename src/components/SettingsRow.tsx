import { View, Text } from 'react-native';
import { styles } from '../styles/SettingsRow.styles';

interface SettingsRowProps {
    label: string;
    children: React.ReactNode;
    divider?: boolean;
}

export default function SettingsRow({ label, children, divider }: SettingsRowProps) {
    return (
        <View style={[styles.row, divider && styles.rowDivider]}>
            <Text style={styles.label}>{label}</Text>
            {children}
        </View>
    );
}