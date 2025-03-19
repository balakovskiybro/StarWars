import React, { useEffect } from "react";
import s from "./style.module.scss";
import { tabsList } from "../consts";

interface TabsProps {
    activeTab: string;
    setActiveTab: (key: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
    useEffect(() => {
        const savedTab = localStorage.getItem("activeTab");
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);

    const handleTab = (key: string) => {
        setActiveTab(key);
        localStorage.setItem("activeTab", key);
    };

    return (
        <div className={s.tabs}>
            {tabsList.map((tab) => (
                <button
                    key={tab.key}
                    className={activeTab === tab.key ? s.active : ""}
                    onClick={() => handleTab(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};