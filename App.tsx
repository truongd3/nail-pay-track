import { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { initDatabase, clearAllEntries, clearProfile } from './src/db/database';
import { useProfileStore } from './src/store/useProfileStore';
import RootNavigator from './src/navigation/RootNavigator';
import OnboardingScreen from './src/screens/OnboardingScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [dbReady, setDbReady] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const { profile, isLoaded, loadProfile } = useProfileStore();
    const MIN_SPLASH_DURATION = 2000; // ms

    useEffect(() => {
        async function prepare() {
            const start = Date.now();
            try {
                initDatabase();
                // clearProfile();
                loadProfile();
                // setDbReady(true);
            } catch (error) {
                console.error('Failed to initialize database:', error);
            }
            const elapsed = Date.now() - start;
            const remaining = Math.max(0, MIN_SPLASH_DURATION - elapsed);
            setTimeout(() => setDbReady(true), remaining);
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (dbReady && isLoaded) await SplashScreen.hideAsync();
    }, [dbReady, isLoaded]);

    if (!dbReady || !isLoaded) return null; // keep native splash visible, nothing to render yet

    const renderScreen = () => {
        if (!profile && showWelcome) return <WelcomeScreen onGetStarted={() => setShowWelcome(false)} />;
        if (!profile) return <OnboardingScreen />;
        return <RootNavigator />;
    };

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                {renderScreen()}
                <StatusBar style="dark" />
            </View>
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
