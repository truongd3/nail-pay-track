import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TodayScreen from '../screens/TodayScreen';
import HistoryStackNavigator from './HistoryStackNavigator';
import StatsScreen from '../screens/StatsScreen';
import AccountMenuScreen from '../screens/account/AccountMenuScreen';
import MyProfileScreen from '../screens/account/MyProfileScreen';
import MySalonScreen from '../screens/account/MySalonScreen';
import AccountSettingsScreen from '../screens/account/AccountSettingsScreen';
import HelpFAQScreen from '../screens/account/HelpFAQScreen';
import PrivacyTermsScreen from '../screens/account/PrivacyTermsScreen';
import type { RootStackParamList } from './types';
import { useTheme } from '../theme/ThemeContext';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
    const colors = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.accent,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: { backgroundColor: colors.background, borderTopColor: colors.border },
                tabBarLabelStyle: { fontSize: 11, fontWeight: '600', letterSpacing: 0.5 },
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'ellipse';
                    if (route.name === 'Today') iconName = 'today-outline';
                    else if (route.name === 'History') iconName = 'time-outline';
                    else if (route.name === 'Stats') iconName = 'stats-chart-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Today" component={TodayScreen} />
            <Tab.Screen name="History" component={HistoryStackNavigator} />
            <Tab.Screen name="Stats" component={StatsScreen} />
        </Tab.Navigator>
    );
}

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="MainTabs" component={MainTabs} />
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen name="AccountMenu" component={AccountMenuScreen} />
                <RootStack.Screen name="MyProfile" component={MyProfileScreen} />
                <RootStack.Screen name="MySalon" component={MySalonScreen} />
                <RootStack.Screen name="AccountSettings" component={AccountSettingsScreen} />
                <RootStack.Screen name="HelpFAQ" component={HelpFAQScreen} />
                <RootStack.Screen name="PrivacyTerms" component={PrivacyTermsScreen} />
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}