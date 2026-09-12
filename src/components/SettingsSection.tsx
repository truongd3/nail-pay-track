import { View, Text } from 'react-native';
import { createStyles } from '../styles/SettingsSection.styles';
import { useTheme } from '../theme/ThemeContext';

interface SettingsSectionProps {
    label: string;
    children: React.ReactNode;
}

export default function SettingsSection({ label, children }: SettingsSectionProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.section}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.card}>{children}</View>
        </View>
    );
}