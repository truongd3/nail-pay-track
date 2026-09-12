import { useState } from 'react';
import { View, Text, Pressable, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system/legacy';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import KeyboardFormScreen from '../../components/KeyboardFormScreen';
import LabeledInput from '../../components/LabeledInput';
import ScreenContainer from '../../components/ScreenContainer';
import OptionList from '../../components/OptionList';
import { useProfileStore } from '../../store/useProfileStore';
import { getInitials } from '../../utils/initials';
import { US_STATES, CA_PROVINCES } from '../../data/regions';
import { Country } from '../../types/profile';
import { createStyles } from '../../styles/MyProfileScreen.styles';
import { useTheme } from '../../theme/ThemeContext';

async function persistAvatarImage(uri: string): Promise<string> {
    const filename = `avatar_${Date.now()}.jpg`;
    const dest = `${FileSystem.documentDirectory}${filename}`;
    await FileSystem.copyAsync({ from: uri, to: dest });
    return dest;
}

export default function MyProfileScreen() {
    const colors = useTheme();
    const styles = createStyles(colors);
    const navigation = useNavigation<any>();
    const { profile, saveProfile } = useProfileStore();

    const [name, setName] = useState(profile?.name ?? '');
    const [email, setEmail] = useState(profile?.email ?? '');
    const [phone, setPhone] = useState(profile?.phone ?? '');
    const [country, setCountry] = useState<Country>(profile?.country ?? 'US');
    const [region, setRegion] = useState<string | null>(profile?.region ?? null);
    const [avatarUri, setAvatarUri] = useState<string | null>(profile?.avatarUri ?? null);
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const [showRegionPicker, setShowRegionPicker] = useState(false);

    const regionOptions = country === 'CA' ? CA_PROVINCES : US_STATES;
    const regionLabel = regionOptions.find((r) => r.value === region)?.label ?? 'Select';
    const isValid = name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && !!region;

    const handlePickAvatar = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) return;
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });
        if (!result.canceled) setAvatarUri(await persistAvatarImage(result.assets[0].uri));
    };

    const handleSave = () => {
        if (!name.trim() || !email.trim() || !phone.trim()) {
            Alert.alert("Missing information", "Name, email, and phone are required.");
            return;
        }
        if (!region) {
            Alert.alert("Missing information", "Please select your state/province.");
            return;
        }
        saveProfile({ name, email, phone, country, region, avatarUri });
        navigation.goBack();
    };

    const handleCountrySelect = (value: string) => {
        setCountry(value as Country);
        setRegion(null); // reset, since old region won't be valid in new country
        setShowCountryPicker(false);
    };

    if (showCountryPicker) {
        return (
            <ScreenContainer edges={['top', 'bottom']}>
                <BackHeader title="Country" onBack={() => setShowCountryPicker(false)} />
                <OptionList
                    options={[
                        { label: 'United States', value: 'US' },
                        { label: 'Canada', value: 'CA' },
                    ]}
                    selectedValue={country} onSelect={handleCountrySelect}
                />
            </ScreenContainer>
        );
    }

    if (showRegionPicker) {
        return (
            <ScreenContainer edges={['top', 'bottom']}>
                <BackHeader title={country === 'CA' ? 'Province' : 'State'} onBack={() => setShowRegionPicker(false)}/>
                <OptionList options={regionOptions} selectedValue={region} onSelect={(value) => { setRegion(value); setShowRegionPicker(false); }}
                />
            </ScreenContainer>
        );
    }

    return (
        <KeyboardFormScreen contentContainerStyle={styles.content}>
            <BackHeader title="My Profile" />

            <Pressable style={styles.avatarWrap} onPress={handlePickAvatar}>
                {avatarUri ? (
                    <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
                ) : (
                    <View style={styles.avatarCircle}>
                        <Text style={styles.avatarInitials}>{getInitials(name)}</Text>
                    </View>
                )}
                <View style={styles.avatarEditBadge}>
                    <Ionicons name="camera" size={14} color="#fff" />
                </View>
            </Pressable>

            <LabeledInput label="NAME" value={name} onChangeText={setName} />
            <LabeledInput label="EMAIL" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <LabeledInput label="PHONE" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

            <Pressable style={styles.regionSelector} onPress={() => setShowCountryPicker(true)}>
                <Text style={styles.regionLabel}>COUNTRY</Text>
                <View style={styles.regionValueRow}>
                    <Text style={styles.regionValue}>{country === 'CA' ? 'Canada' : 'United States'}</Text>
                    <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
                </View>
            </Pressable>
            
            <Pressable style={styles.regionSelector} onPress={() => setShowRegionPicker(true)}>
                <Text style={styles.regionLabel}>{country === 'CA' ? 'PROVINCE' : 'STATE'}</Text>
                <View style={styles.regionValueRow}>
                    <Text style={styles.regionValue}>{regionLabel}</Text>
                    <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
                </View>
            </Pressable>

            <Button label="Save Changes" onPress={handleSave} disabled={!isValid} />
        </KeyboardFormScreen>
    );
}