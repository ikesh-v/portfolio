import { MoonStar, Sun, SunMoon } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = ({}) => {
    const [mode, setMode] = useState<string | null>(null);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        if (savedTheme) setMode(savedTheme);
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, []);
    const cycleTheme = () => {
        switch(localStorage.getItem('theme')) {
            case 'light': 
                localStorage.setItem('theme', 'dark');
                document.documentElement.setAttribute('data-theme', 'dark')
                setMode('dark')
                break;
            case 'dark': 
                localStorage.removeItem('theme'); 
                document.documentElement.removeAttribute('data-theme')
                setMode(null)
                break;
            default: 
                localStorage.setItem('theme', 'light'); 
                document.documentElement.setAttribute('data-theme', 'light')
                setMode('light')
                break;
        }
    }

    return (
        <>
            <button onClick={cycleTheme}>
                {
                    mode
                    ? mode === 'dark'
                        ? <MoonStar />
                        : <Sun />
                    : <SunMoon />
                }
            </button>
        </>
    )
}