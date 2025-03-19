import React from "react";
import s from './style.module.scss'
import laptop from '/laptop.png'
import phone from '/phone.png'
import computer from '/4K.png'

export const HowWe: React.FC = () => {
    return (
        <section className={s.how}>
            <div className={s.content}>
                <h2 className={s.title}>Watch everywhere</h2>
                <p className={s.descr}>
                    You can find everything related to movies here. Be without limited.
                    You can browse anywhere on your phone, tablet, laptop. You can be flexible. You can also use our app offline.
                </p>
                <button className={s.button}>Let's start</button>
            </div>

            <div className={s.content}>
                <img src={computer} className={s.comp} alt="" />
                <img src={laptop} className={s.laptop} alt="" />
                <img src={phone} className={s.phone} alt="" />
            </div>
        </section>
    )
}