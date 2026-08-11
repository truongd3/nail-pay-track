import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/ScreenContainer.styles';

interface ScreenContainerProps {
    children: React.ReactNode;
}

export default function ScreenContainer({ children }: ScreenContainerProps) {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {children}
        </SafeAreaView>
    );
}