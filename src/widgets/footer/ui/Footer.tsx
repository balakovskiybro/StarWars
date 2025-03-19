import React from "react";
import s from './style.module.scss'
import { LowerNavigation } from "./LowerNavigation";
import { SocialLinks } from "./SocialLinks";

export const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <SocialLinks />
            <LowerNavigation />
            <div className={s.copyright}>
                <p>
                    ©Copyright 2023 FilmsLand . All rights reserved.
                </p>
                <p>
                    Create by Julianna
                </p>
            </div>
        </footer>
    )
}