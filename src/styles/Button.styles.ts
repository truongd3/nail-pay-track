import { StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
    button: { 
        borderRadius: 16, 
        paddingVertical: 18, 
        alignItems: 'center', 
        marginBottom: 12 
    },
    primary: { 
        backgroundColor: colors.accent 
    },
    primaryDisabled: { 
        backgroundColor: colors.accentSoft 
    },
    secondary: { 
        backgroundColor: colors.card 
    },
    label: { 
        fontSize: 17, 
        fontWeight: '600' 
    },
    primaryLabel: { 
        color: '#fff' 
    },
    secondaryLabel: { 
        color: colors.textPrimary 
    },
});