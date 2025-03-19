import React from "react";
import Next from "../../../shared/icons/Next";
import Back from "../../../shared/icons/Prev";
import s from '../style.module.scss'
import { Link } from "react-router-dom";
import { PlanetsTypes } from "../../../shared/types/Planet";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import Loading from "../../../shared/ui/Loading";
import { usePagination } from "../../../shared/hooks/usePagination";

export const Planets: React.FC = () => {
    const { data: planets, setPage, hasNext, hasPrev, isLoading } = usePagination<PlanetsTypes>(ROUTES_PATH.PLANETS);

    return (
        <div className={s.post}>
            {isLoading && <Loading />}
            {hasPrev && (
                <button onClick={() => setPage((prev) => prev - 1)}>
                    <Back />
                </button>
            )}
            <ul className={s.list}>
                {planets.map((planet) => {
                    const id = planet.url.split("/").slice(-2, -1)[0];
                    return (
                        <Link key={id} to={`/planets/${id}`}>
                            <li className={s.link}>{planet.name}</li>
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