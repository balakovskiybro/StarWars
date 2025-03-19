import React from "react";
import { FilmTypes } from "../../../shared/types/Film";
import { Link } from "react-router-dom";
import s from '../style.module.scss'
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import Loading from "../../../shared/ui/Loading";
import { usePagination } from "../../../shared/hooks/usePagination";

export const Films: React.FC = () => {
    const { data: films, isLoading } = usePagination<FilmTypes>(ROUTES_PATH.FILMS);

    return (
        <div className={s.post}>
            {isLoading
                ?
                <Loading />
                :
                <ul className={s.list}>
                    {films.map((film, index) => (
                        <Link key={film.episode_id} to={`/films/${index + 1}`}>
                            <li className={s.link}>{film.title}</li>
                        </Link>
                    ))}
                </ul>
            }

        </div>
    )
}