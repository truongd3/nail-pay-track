import { useState } from 'react';
import { View, Text, Pressable, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackHeader from '../../components/BackHeader';
import ScreenContainer from '../../components/ScreenContainer';
import LabeledInput from '../../components/LabeledInput';
import Button from '../../components/Button';
import { useSalonStore } from '../../store/useSalonStore';
import { styles } from '../../styles/MySalonScreen.styles';

export default function MySalonScreen() {
    const navigation = useNavigation<any>();
    const { salon, saveSalon } = useSalonStore();

    const [name, setName] = useState(salon?.name ?? '');
    const [address, setAddress] = useState(salon?.address ?? '');
    const [splitPercent, setSplitPercent] = useState(salon?.splitPercent?.toString() ?? '');

    const handleSave = () => {
        saveSalon({ name, address, splitPercent: parseFloat(splitPercent) || 0 });
        navigation.goBack();
    };

    return (
        <ScreenContainer edges={['top', 'bottom']}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
                        <BackHeader title="My Salon" />

                        <LabeledInput label="SALON NAME" value={name} onChangeText={setName} placeholder="Luxe Nails & Spa" />
                        <LabeledInput label="ADDRESS" value={address} onChangeText={setAddress} placeholder="123 Main St, City" />
                        <LabeledInput
                            label="YOUR SPLIT (%)"
                            value={splitPercent}
                            onChangeText={setSplitPercent}
                            placeholder="60"
                            keyboardType="decimal-pad"
                        />
                        <Text style={styles.hint}>The percentage of service revenue you keep — the rest goes to the salon.</Text>

                        <Button label="Save Changes" onPress={handleSave} />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScreenContainer>
    );
}