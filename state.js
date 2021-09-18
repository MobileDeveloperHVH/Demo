import React from 'react';
import {
    View,
    Switch,
    Appearance,
} from 'react-native';

export default function State() {
    const colorScheme = Appearance.getColorScheme();

    const [isDarkMode, setIsDarkMode] = React.useState(colorScheme === 'dark');

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isDarkMode ? 'black' : 'white',
            }}
        >
            <Switch
                value={isDarkMode}
                onValueChange={(value) => {
                    setIsDarkMode(value);
                }}
            />
        </View>
    )
}
