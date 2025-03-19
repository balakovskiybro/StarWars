import React from "react";
import { Link } from "react-router-dom";
import User from "../../../shared/icons/User";
import s from './style.module.scss'

export const Header: React.FC = () => {
    return(
        <header className={s.header}>
            <Link className={s.logo} to={'/'}>StarWars</Link>
            <ul className={s.list}>
                <li><Link className={s.link} to={'/'}>Home</Link></li>
                <li><Link className={s.link} to={'/'}>Popular Films</Link></li>
                <li><Link className={s.link} to={'/'}>Latest Films</Link></li>
                <li><Link className={s.link} to={'/'}>My List</Link></li>
            </ul>
            <Link to={'/'}>
                <User />
            </Link>
        </header>
    )
}