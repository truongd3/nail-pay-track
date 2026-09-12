import { createContext, useContext } from 'react';
import { lightColors, darkColors, ThemeColors } from './colors';
import { useSettingsStore } from '../store/useSettingsStore';

const ThemeContext = createContext<ThemeColors>(lightColors);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = useSettingsStore((state) => state.settings.theme);
    const colors = theme === 'dark' ? darkColors : lightColors;

    return <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeColors {
    return useContext(ThemeContext);
}