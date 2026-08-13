import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/ScreenContainer.styles';

interface ScreenContainerProps {
    children: React.ReactNode;
    edges?: ('top' | 'bottom' | 'left' | 'right')[];
}

export default function ScreenContainer({
    children,
    edges = ['top'],
}: ScreenContainerProps) {
    return (
        <SafeAreaView style={styles.container} edges={edges}>
            {children}
        </SafeAreaView>
    );
}