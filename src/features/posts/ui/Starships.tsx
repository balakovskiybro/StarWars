import React from "react";
import Next from "../../../shared/icons/Next";
import Back from "../../../shared/icons/Prev";
import s from '../style.module.scss'
import { Link } from "react-router-dom";
import { StarshipTypes } from "../../../shared/types/Starship";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import Loading from "../../../shared/ui/Loading";
import { usePagination } from "../../../shared/hooks/usePagination";

export const Starships: React.FC = () => {
    const { data: starships, setPage, hasNext, hasPrev, isLoading } = usePagination<StarshipTypes>(ROUTES_PATH.STARSHIPS);

    return (
        <div className={s.post}>
            {isLoading && <Loading />}
            {hasPrev && (
                <button onClick={() => setPage((prev) => prev - 1)}>
                    <Back />
                </button>
            )}

            <ul className={s.list}>
                {starships.map((starship) => {
                    const id = starship.url.split("/").slice(-2, -1)[0];
                    return (
                        <Link key={id} to={`/starships/${id}`}>
                            <li className={s.link}>{starship.name}</li>
                        </Link>
                    );
                })}
            </ul>
            {hasNext && (
                <button onClick={() => setPage((prev) => prev + 1)}>
                    <Next />
                </button>
            )}
        </div>
    )
}