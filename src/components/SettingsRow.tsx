import { View, Text } from 'react-native';
import { createStyles } from '../styles/SettingsRow.styles';
import { useTheme } from '../theme/ThemeContext';

interface SettingsRowProps {
    label: string;
    children: React.ReactNode;
    divider?: boolean;
}

export default function SettingsRow({ label, children, divider }: SettingsRowProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={[styles.row, divider && styles.rowDivider]}>
            <Text style={styles.label}>{label}</Text>
            {children}
        </View>
    );
}