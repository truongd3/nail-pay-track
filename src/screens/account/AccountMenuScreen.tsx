import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/ScreenContainer';
import Avatar from '../../components/Avatar';
import MenuRow from '../../components/MenuRow';
import { useProfileStore } from '../../store/useProfileStore';
import { getInitials } from '../../utils/initials';
import { styles } from '../../styles/AccountMenuScreen.styles';

export default function AccountMenuScreen() {
    const navigation = useNavigation<any>();
    const profile = useProfileStore((state) => state.profile);

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <View style={styles.header}>
                <Text style={styles.title}>Account</Text>
                <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
                <Ionicons name="close" size={26} color="#1a1a2e" />
                </Pressable>
            </View>

            <View style={styles.profileSummary}>
                <Avatar initials={profile ? getInitials(profile.name) : ''} imageUri={profile?.avatarUri}/>
                <View style={styles.profileText}>
                    <Text style={styles.profileName}>{profile?.name}</Text>
                    <Text style={styles.profileEmail}>{profile?.email}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <MenuRow icon="person-outline" label="My Profile" onPress={() => navigation.navigate('MyProfile')} />
                <MenuRow icon="storefront-outline" label="My Salon" onPress={() => navigation.navigate('MySalon')} />
                <MenuRow icon="settings-outline" label="Settings" onPress={() => navigation.navigate('AccountSettings')} />
                <MenuRow icon="help-circle-outline" label="Help & FAQ" onPress={() => navigation.navigate('HelpFAQ')} />
                <MenuRow icon="document-text-outline" label="Privacy & Terms" onPress={() => navigation.navigate('PrivacyTerms')} />
            </View>
        </ScreenContainer>
    );
}