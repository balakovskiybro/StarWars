import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from '../style.module.scss';
import { FilmTypes } from "../../../shared/types/Film";
import { useFetching } from "../../../shared/hooks/useFetching";
import PostService from "../../../shared/api/PostService";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import { Layout } from "../../../app/layout";
import GoBack from "../../../shared/ui/GoBack";
import Loading from "../../../shared/ui/Loading";
import Like from "../../../shared/ui/Like";


export const FilmsIdPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<FilmTypes | null>(null);

    const [fetchFilmId, isFilmLoading] = useFetching(
        async (url: string, id: string) => {
            const response = await PostService.getById(id, url);
            setFilm(response.data);
        }
    );

    useEffect(() => {
        if (id) {
            fetchFilmId(ROUTES_PATH.FILMS, id);
        }
    }, [id]);


    return (

        <Layout>

            {isFilmLoading && <Loading />}
            {film && (
                <div className={s.page}>
                    <GoBack />
                    <div className={s.body}>
                        <div className={s.left}>
                            <div className={s.poster}>Poster</div>
                            <div>
                                <h1 className={s.title}>{film.title}</h1>
                                <p className={s.text}>{film.opening_crawl}</p>
                                <p className={s.text}>Producer: {film.producer}</p>
                                <p className={s.text}>Date release: {film.release_date}</p>
                            </div>
                        </div>
                        <Like />
                    </div>
                </div>
            )}
        </Layout>
    );
};