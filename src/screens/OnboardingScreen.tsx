import { useState } from 'react';
import { View, Text, Alert, Pressable, Image, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system/legacy';
import { Ionicons } from '@expo/vector-icons';
import ScreenContainer from '../components/ScreenContainer';
import LabeledInput from '../components/LabeledInput';
import OptionList from '../components/OptionList';
import ProgressDots from '../components/ProgressDots';
import Button from '../components/Button';
import { US_STATES, CA_PROVINCES } from '../data/regions';
import { useProfileStore } from '../store/useProfileStore';
import { Country } from '../types/profile';
import { styles } from '../styles/OnboardingScreen.styles';

const TOTAL_STEPS = 4;

async function persistAvatarImage(uri: string): Promise<string> {
    const filename = `avatar_${Date.now()}.jpg`;
    const dest = `${FileSystem.documentDirectory}${filename}`;
    await FileSystem.copyAsync({ from: uri, to: dest });
    return dest;
}

export default function OnboardingScreen() {
    const saveProfile = useProfileStore((state) => state.saveProfile);

    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState<Country | null>(null);
    const [region, setRegion] = useState<string | null>(null);
    const [avatarUri, setAvatarUri] = useState<string | null>(null);

    const regionOptions = country === 'CA' ? CA_PROVINCES : US_STATES;

    const canGoNext = () => {
        if (step === 0) return name.trim() !== '' && email.trim() !== '' && phone.trim() !== '';
        if (step === 1) return country !== null;
        if (step === 2) return region !== null;
        return true; // avatar step is optional
    };

    const handleNext = () => {
        if (step < TOTAL_STEPS - 1) setStep(step + 1);
        else handleFinish();
    };

    const handleBack = () => { if (step > 0) setStep(step - 1); };

    const handlePickAvatar = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert('Permission needed', 'Allow photo access to set a profile picture.');
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });
        if (!result.canceled) {
            const persistedUri = await persistAvatarImage(result.assets[0].uri);
            setAvatarUri(persistedUri);
        }
    };

    const handleFinish = () => {
        if (!country || !region) return;
        saveProfile({ name, email, phone, country, region, avatarUri });
    };

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
                        <ProgressDots total={TOTAL_STEPS} current={step} />

                        {step === 0 && (
                            <>
                                <Text style={styles.stepTitle}>Let's get to know you</Text>
                                <Text style={styles.stepSubtitle}>We use this to personalize your earnings profile.</Text>
                                <LabeledInput label="NAME" value={name} onChangeText={setName} placeholder="Jane Nguyen" />
                                <LabeledInput
                                    label="EMAIL" value={email}
                                    onChangeText={setEmail}
                                    placeholder="jane@email.com" keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                                <LabeledInput
                                    label="PHONE" value={phone}
                                    onChangeText={setPhone}
                                    placeholder="(555) 123-4567" keyboardType="phone-pad"
                                />
                            </>
                        )}

                        {step === 1 && (
                            <>
                                <Text style={styles.stepTitle}>Where are you based?</Text>
                                <OptionList 
                                    options={[
                                        { label: 'United States', value: 'US' },
                                        { label: 'Canada', value: 'CA' },
                                    ]}
                                    selectedValue={country}
                                    onSelect={(value) => {
                                        setCountry(value as Country);
                                        setRegion(null); // reset region if country changes
                                    }}
                                />
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <Text style={styles.stepTitle}>{country === 'CA' ? 'Which province?' : 'Which state?'}</Text>
                                <OptionList options={regionOptions} selectedValue={region} onSelect={setRegion} />
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <Text style={styles.stepTitle}>Add a profile photo</Text>
                                <Text style={styles.stepSubtitle}>Optional — you can always add this later.</Text>
                                <Pressable style={styles.avatarPicker} onPress={handlePickAvatar}>
                                    {avatarUri ? (
                                        <Image source={{ uri: avatarUri }} style={styles.avatarPreview} />
                                    ) : (
                                        <Ionicons name="camera-outline" size={28} color="#9a9a9a" />
                                    )}
                                </Pressable>
                            </>
                        )}

                        <View style={styles.buttonRow}>
                            {step > 0 && (<Button label="Back" onPress={handleBack} variant="secondary" />)}
                            <Button
                                label={step === TOTAL_STEPS - 1 ? 'Get Started' : 'Continue'}
                                onPress={handleNext} disabled={!canGoNext()}
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScreenContainer>
    );
}