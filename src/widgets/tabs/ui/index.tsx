import React from "react";
import s from "./style.module.scss";
import { tabsList } from "../consts";


interface TabsProps {
    activeTab: string;
    setActiveTab: (key: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className={s.tabs}>
            {tabsList.map((tab) => (
                <button
                    key={tab.key}
                    className={activeTab === tab.key ? s.active : ""}
                    onClick={() => setActiveTab(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};