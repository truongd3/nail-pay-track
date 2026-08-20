import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../screens/HistoryScreen';
import EditEntryScreen from '../screens/EditEntryScreen';
import type { HistoryStackParamList } from './types';

const Stack = createNativeStackNavigator<HistoryStackParamList>();

export default function HistoryStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HistoryList" component={HistoryScreen} />
            <Stack.Screen name="EditEntry" component={EditEntryScreen} />
        </Stack.Navigator>
    );
}