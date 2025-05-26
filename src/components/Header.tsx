"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";
import { ThemeSwitcher } from "./ThemSwitcher";
import { CircleUser, Github, House, Mail } from "lucide-react";


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
  const pathname = usePathname() ?? "";
  const headerItems = [
    { 
      label: 'About',
      icon:  <CircleUser />,
      href: '/about'
    }
  ]

  return (
    <>
      <div className="flex gap-4">
        <a href="/"><House /></a>
        <VerticalSpacer />
        {headerItems.map(item => <a href={item.href}><span className="flex gap-1">{item.icon}{item.label}</span></a>)}
        <VerticalSpacer />
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
