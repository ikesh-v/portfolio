import { MoonStar, Sun, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeSwitcher = ({}) => {
    const [mode, setMode] = useState<'light' | 'dark' | null>(null);
    const cycleTheme = () => {
        document.documentElement.classList.toggle("dark",
             localStorage.getItem('theme') === "dark" ||
            (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches),
        );
        switch(localStorage.getItem('theme')) {
            case 'light': 
                localStorage.setItem('theme', 'dark'); 
                setMode('dark')
                break;
            case 'dark': 
                localStorage.removeItem('theme'); 
                setMode(null)
                break;
            default: 
                localStorage.setItem('theme', 'light'); 
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