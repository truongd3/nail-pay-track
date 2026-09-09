import { View, Text } from 'react-native';
import { styles } from '../styles/SettingsSection.styles';

interface SettingsSectionProps {
    label: string;
    children: React.ReactNode;
}

export default function SettingsSection({ label, children }: SettingsSectionProps) {
    return (
        <View style={styles.section}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.card}>{children}</View>
        </View>
    );
}