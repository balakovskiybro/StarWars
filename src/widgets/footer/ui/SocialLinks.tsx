import React from "react";
import { Link } from "react-router-dom";
import s from './style.module.scss'
import Instagram from "../../../shared/icons/Instagram";
import Facebook from "../../../shared/icons/Facebook";
import Twitter from "../../../shared/icons/Twitter";
import Gmail from "../../../shared/icons/Gmail";

export const SocialLinks: React.FC = () => {
    return (
        <div className={s.contacts}>
            <p className={s.connect}>Connect with as</p>
            <div className={s.social}>
                <Link to={'/'}>
                    <Instagram />
                </Link>
                <Link to={'/'}>
                    <Facebook />
                </Link>
                <Link to={'/'}>
                    <Twitter />
                </Link>
                <Link to={'/'}>
                    <Gmail />
                </Link>
            </div>
        </div>
    )
}