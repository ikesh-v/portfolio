"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemSwitcher";
import { Github, Mail } from "lucide-react";


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
    <>
      <div className="flex gap-4">
        <Mail />
        <Github />
        <VerticalSpacer />
        <ThemeSwitcher />
      </div>
    </>
  );
};

const VerticalSpacer: React.FC<{width?: string}> = ({width = "2px"}) => {
  return (
    <span style={{width, backgroundColor: "var(--ascent-1)", display: "inline-block"} }></span>
  )
}
