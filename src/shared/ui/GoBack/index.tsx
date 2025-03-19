import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../icons/Back";
import s from './style.module.scss'

const GoBack: React.FC = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return(
        <button className={s.back} onClick={handleBack}>
            <Back />
            <span>Back</span>
        </button>
    )
}

export default GoBack