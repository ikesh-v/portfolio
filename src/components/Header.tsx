"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemSwitcher";
import { Github, Linkedin, Mail } from "lucide-react";


type TimeDisplayProps = {
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  return (
    <div className="flex gap-8">
      <h3 className="text-xl font-bold">Ikesh V</h3>
      <div className="flex items-center justify-center gap-4">
        <VerticalSpacer /> 
        <a href="mailto:ikeshyadav1@gmail.com"><Mail className="w-5 h-5" /></a>
        <a href="https://www.linkedin.com/in/ikesh-v" target="_blank"><Linkedin className="w-5 h-5" /></a>
        <a href="https://github.com/ikesh-v" target="_blank"><Github className="w-5 h-5" /></a>
        <VerticalSpacer />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

const VerticalSpacer: React.FC<{width?: string}> = ({width = "2px"}) => {
  return (
    <span style={{width, backgroundColor: "var(--ascent-1)", display: "inline-block", height: "100%"} }></span>
  )
}
