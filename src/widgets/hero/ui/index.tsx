import React, { useState } from "react";
import { Tabs } from "../../tabs";
import s from './style.module.scss';
import { Films, Peoples, Planets, Starships, Vehicles } from "../../../features/posts";


const componentsMap: Record<string, React.FC> = {
    films: Films,
    people: Peoples,
    planets: Planets,
    starships: Starships,
    vehicles: Vehicles
};

export const Hero: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("films");

    const ActiveComponent = componentsMap[activeTab];

    return (
        <section className={s.hero}>
            <h1 className={s.title}>Discover StarWars Universe</h1>
            <div className={s.row}>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className={s.content}>
                    <ActiveComponent />
                </div>
            </div>
        </section>
    );
};