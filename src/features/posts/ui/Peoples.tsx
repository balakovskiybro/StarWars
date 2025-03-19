import React from "react";
import { PeopleTypes } from "../../../shared/types/People";
import Next from "../../../shared/icons/Next";
import Back from "../../../shared/icons/Prev";
import s from '../style.module.scss'
import { Link } from "react-router-dom";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import Loading from "../../../shared/ui/Loading";
import { usePagination } from "../../../shared/hooks/usePagination";

export const Peoples: React.FC = () => {
    const { data: peoples, setPage, hasNext, hasPrev, isLoading } = usePagination<PeopleTypes>(ROUTES_PATH.PEOPLE);

    return (
        <div className={s.post}>
            {isLoading && <Loading />}
            {hasPrev && (
                <button onClick={() => setPage((prev) => prev - 1)}>
                    <Back />
                </button>
            )}
            <ul className={s.list}>
                {peoples.map((person) => {
                    const id = person.url.split("/").slice(-2, -1)[0];
                    return (
                        <Link key={id} to={`/people/${id}`}>
                            <li className={s.link}>{person.name}</li>
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