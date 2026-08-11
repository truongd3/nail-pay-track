import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TodayScreen from '../screens/TodayScreen';
import HistoryScreen from '../screens/HistoryScreen';
import StatsScreen from '../screens/StatsScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#5a9c6f',
                    tabBarInactiveTintColor: '#9a9a9a',
                    tabBarStyle: {
                        backgroundColor: '#faf8f3',
                        borderTopColor: '#eee',
                    },
                    tabBarLabelStyle: {
                        fontSize: 11,
                        fontWeight: '600',
                        letterSpacing: 0.5,
                    },
                    tabBarIcon: ({ color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap = 'ellipse';

                        if (route.name === 'Today') iconName = 'today-outline';
                        else if (route.name === 'History') iconName = 'time-outline';
                        else if (route.name === 'Stats') iconName = 'stats-chart-outline';

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}>
                <Tab.Screen name="Today" component={TodayScreen} />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Stats" component={StatsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}