"use client"

import {DarkModeSwitch} from "react-toggle-dark-mode";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export const ThemeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [isDarkMode, setDarkMode] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        if (currentTheme === 'dark') {
            setDarkMode(true);
        }
    }, [])
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
        setTheme(checked ? 'dark' : 'light');
    };

    return (
        // @ts-ignore
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
        />
    )

}