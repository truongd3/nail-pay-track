import { View, Text, Pressable, ScrollView } from 'react-native';
import BackHeader from '../../components/BackHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '../../data/legal';
import { createStyles } from '../../styles/StaticContentScreen.styles';
import { useTheme } from '../../theme/ThemeContext';

export default function PrivacyTermsScreen() {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <BackHeader title="Privacy & Terms" />
                <View style={styles.card}>
                    <Text style={styles.question}>Privacy Policy</Text>
                    <Text style={styles.answer}>{PRIVACY_POLICY}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.question}>Terms of Service</Text>
                    <Text style={styles.answer}>{TERMS_OF_SERVICE}</Text>
                </View>
            </ScrollView>
        </ScreenContainer>
    );
}