import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initDatabase, clearAllEntries, clearProfile } from './src/db/database';
import { useProfileStore } from './src/store/useProfileStore';
import RootNavigator from './src/navigation/RootNavigator';
import OnboardingScreen from './src/screens/OnboardingScreen';

export default function App() {
    const [dbReady, setDbReady] = useState(false);
    const { profile, isLoaded, loadProfile } = useProfileStore();

    useEffect(() => {
        try {
            initDatabase();
            // clearProfile();
            setDbReady(true);
            loadProfile();
        } catch (error) {
            console.error('Failed to initialize database:', error);
        }
    }, []);

    if (!dbReady || !isLoaded) {
        return (
            <SafeAreaProvider>
                <View style={styles.loading}>
                    <Text>Loading...</Text>
                </View>
            </SafeAreaProvider>
        );
    }

    return (
        <SafeAreaProvider>
            {profile ? <RootNavigator /> : <OnboardingScreen />}
            <StatusBar style="dark" />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
