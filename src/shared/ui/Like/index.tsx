import React from "react";
import Heart from "../../icons/Heart";
import s from './style.module.scss'

const Like: React.FC = () => {
    return (
        <div className={s.like}>
            <button>
                <Heart />
                <p>Add to Favorites</p>
            </button>

        </div>
    )
}

export default Like