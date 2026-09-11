import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowBanner: true,
        shouldShowList: true,
    }),
});

export async function requestNotificationPermission(): Promise<boolean> {
    if (!Device.isDevice) return false; // simulators can't receive real push notifications
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }

    return finalStatus === 'granted';
}

export async function scheduleDailyReminder(hour: number, minute: number) {
    await Notifications.cancelAllScheduledNotificationsAsync(); // clear old schedule first

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Log your earnings",
            body: "Don't forget to log today's money and tips!",
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour,
            minute,
        },
    });
}

export async function cancelDailyReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
}