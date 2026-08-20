import { useState } from 'react';
import { View, Text, Pressable, Switch, ScrollView, Alert, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackHeader from '../../components/BackHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { getAllEntries } from '../../db/database';
import { styles } from '../../styles/AccountSettingsScreen.styles';

export default function AccountSettingsScreen() {
    const navigation = useNavigation<any>();
    const [notifications, setNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleExport = async () => {
        const entries = getAllEntries();
        if (entries.length === 0) {
            Alert.alert('Nothing to export', 'You have no entries yet.');
            return;
        }
        const json = JSON.stringify(entries, null, 2);
        await Share.share({ message: json, title: 'Nail Pay Track export' });
    };

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <BackHeader title="Settings" /> 

                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Daily reminder notifications</Text>
                    <Switch value={notifications} onValueChange={setNotifications} trackColor={{ true: '#5a9c6f' }} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Dark mode</Text>
                    <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ true: '#5a9c6f' }} />
                </View>

                <Pressable style={styles.exportRow} onPress={handleExport}>
                    <Text style={styles.exportLabel}>Export my data</Text>
                    <Ionicons name="share-outline" size={20} color="#5a9c6f" />
                </Pressable>
            </ScrollView>
        </ScreenContainer>
    );
}