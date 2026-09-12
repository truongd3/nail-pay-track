import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from '../styles/ScreenContainer.styles';
import { useTheme } from '../theme/ThemeContext';

interface ScreenContainerProps {
    children: React.ReactNode;
    edges?: ('top' | 'bottom' | 'left' | 'right')[];
}

export default function ScreenContainer({ children, edges = ['top'] }: ScreenContainerProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <SafeAreaView style={styles.container} edges={edges}>
            {children}
        </SafeAreaView>
    );
}