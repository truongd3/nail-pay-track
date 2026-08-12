import { Pressable, Text } from 'react-native';
import { styles } from '../styles/Button.styles';

interface ButtonProps {
    label: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}

export default function Button({
    label,
    onPress,
    variant = 'primary',
    disabled = false,
}: ButtonProps) {
    const isPrimary = variant === 'primary';

    return (
        <Pressable
            style={[
                styles.button,
                isPrimary ? styles.primary : styles.secondary,
                disabled && isPrimary && styles.primaryDisabled,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.secondaryLabel]}>
                {label}
            </Text>
        </Pressable>
    );
}