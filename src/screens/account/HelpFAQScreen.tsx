import { View, Text, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackHeader from '../../components/BackHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { FAQS } from '../../data/faqs';
import { createStyles } from '../../styles/StaticContentScreen.styles';
import { useTheme } from '../../theme/ThemeContext';

export default function HelpFAQScreen() {
    const colors = useTheme();
    const styles = createStyles(colors);

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <BackHeader title="Help & FAQ" />

                {FAQS.map((item) => (
                    <View key={item.question} style={styles.card}>
                        <Text style={styles.question}>{item.question}</Text>
                        <Text style={styles.answer}>{item.answer}</Text>
                    </View>
                ))}
            </ScrollView>
        </ScreenContainer>
    );
}