import { useState } from 'react';
import { View, Text, Pressable, Image, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system/legacy';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import ScreenContainer from '../../components/ScreenContainer';
import LabeledInput from '../../components/LabeledInput';
import OptionList from '../../components/OptionList';
import { useProfileStore } from '../../store/useProfileStore';
import { getInitials } from '../../utils/initials';
import { US_STATES, CA_PROVINCES } from '../../data/regions';
import { Country } from '../../types/profile';
import { styles } from '../../styles/MyProfileScreen.styles';

async function persistAvatarImage(uri: string): Promise<string> {
    const filename = `avatar_${Date.now()}.jpg`;
    const dest = `${FileSystem.documentDirectory}${filename}`;
    await FileSystem.copyAsync({ from: uri, to: dest });
    return dest;
}

export default function MyProfileScreen() {
    const navigation = useNavigation<any>();
    const { profile, saveProfile } = useProfileStore();

    const [name, setName] = useState(profile?.name ?? '');
    const [email, setEmail] = useState(profile?.email ?? '');
    const [phone, setPhone] = useState(profile?.phone ?? '');
    const [country] = useState<Country>(profile?.country ?? 'US');
    const [region, setRegion] = useState(profile?.region ?? '');
    const [avatarUri, setAvatarUri] = useState<string | null>(profile?.avatarUri ?? null);
    const [showRegionPicker, setShowRegionPicker] = useState(false);

    const regionOptions = country === 'CA' ? CA_PROVINCES : US_STATES;
    const regionLabel = regionOptions.find((r) => r.value === region)?.label ?? 'Select';

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
        saveProfile({ name, email, phone, country, region, avatarUri });
        navigation.goBack();
    };

    if (showRegionPicker) {
        return (
            <ScreenContainer edges={['top', 'bottom']}>
                <BackHeader title={country === 'CA' ? 'Province' : 'State'} onBack={() => setShowRegionPicker(false)}/>
                <OptionList
                    options={regionOptions}
                    selectedValue={region}
                    onSelect={(value) => { setRegion(value); setShowRegionPicker(false); }}
                />
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
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

                        <Pressable style={styles.regionSelector} onPress={() => setShowRegionPicker(true)}>
                            <Text style={styles.regionLabel}>{country === 'CA' ? 'PROVINCE' : 'STATE'}</Text>
                            <View style={styles.regionValueRow}>
                                <Text style={styles.regionValue}>{regionLabel}</Text>
                                <Ionicons name="chevron-forward" size={18} color="#9a9a9a" />
                            </View>
                        </Pressable>

                        <Button label="Save Changes" onPress={handleSave} />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScreenContainer>
    );
}