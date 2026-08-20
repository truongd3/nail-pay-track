import { KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, ScrollView, StyleProp, ViewStyle, } from 'react-native';
import ScreenContainer from './ScreenContainer';

interface KeyboardFormScreenProps {
    children: React.ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle>;
    edges?: ('top' | 'bottom' | 'left' | 'right')[];
}

export default function KeyboardFormScreen({
    children,
    contentContainerStyle,
    edges = ['top', 'bottom'],
}: KeyboardFormScreenProps) {
    return (
        <ScreenContainer edges={edges}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={contentContainerStyle} keyboardShouldPersistTaps="handled">
                        {children}
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScreenContainer>
    );
}