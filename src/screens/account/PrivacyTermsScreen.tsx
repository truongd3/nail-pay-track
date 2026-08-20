import { View, Text, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackHeader from '../../components/BackHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { styles } from '../../styles/StaticContentScreen.styles';

export default function PrivacyTermsScreen() {
    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <BackHeader title="Privacy & Terms" />
                <View style={styles.card}>
                    <Text style={styles.answer}>
                        Placeholder — add your real privacy policy and terms of service here before submitting to the App Store. Apple requires a working privacy policy link for apps that collect personal data.
                    </Text>
                </View>
            </ScrollView>
        </ScreenContainer>
    );
}