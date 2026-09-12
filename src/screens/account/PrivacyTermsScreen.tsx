import { View, Text, Pressable, ScrollView } from 'react-native';
import BackHeader from '../../components/BackHeader';
import ScreenContainer from '../../components/ScreenContainer';
import Markdown from 'react-native-markdown-display';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '../../data/legal';
import { createStyles, markdownStyles } from '../../styles/StaticContentScreen.styles';
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
                    <Markdown style={markdownStyles(colors)}>{PRIVACY_POLICY}</Markdown>
                </View>
                <View style={styles.card}>
                    <Text style={styles.question}>Terms of Service</Text>
                    <Markdown style={markdownStyles(colors)}>{TERMS_OF_SERVICE}</Markdown>
                </View>
            </ScrollView>
        </ScreenContainer>
    );
}