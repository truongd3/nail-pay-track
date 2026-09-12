import { View, Text, Image } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { createStyles } from '../styles/WelcomeScreen.styles';
import { useTheme } from '../theme/ThemeContext';

interface WelcomeScreenProps {
    onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <View style={styles.content}>
                <Text style={styles.welcomeLabel}>WELCOME</Text>

                <Image
                    source={require('../../assets/logo/logo-full.png')}
                    style={styles.logoImage} resizeMode="contain"
                />

                <Text style={styles.description}>
                    Log your money and tips each day, and watch your monthly earnings
                    add up — quietly, privately, on your own phone.
                </Text>

                <View style={styles.bottomSection}>
                    <Text style={styles.setupNote}>TAKES UNDER A MINUTE TO SET UP</Text>
                    <Button label="Get started" onPress={onGetStarted} />
                </View>
            </View>
        </ScreenContainer>
    );
}