import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from '../style.module.scss';
import { useFetching } from "../../../shared/hooks/useFetching";
import PostService from "../../../shared/api/PostService";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import { Layout } from "../../../app/layout";
import { PeopleTypes } from "../../../shared/types/People";
import GoBack from "../../../shared/ui/GoBack";
import Loading from "../../../shared/ui/Loading";
import Like from "../../../shared/ui/Like";


export const PeopleIdPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [people, setPeople] = useState<PeopleTypes | null>(null);

    const [fetchPeopleId, isPeopleLoading] = useFetching(
        async (url: 'people', id: string) => {
            const response = await PostService.getById(id, url);
            setPeople(response.data);
        }
    );

    useEffect(() => {
        if (id) {
            fetchPeopleId(ROUTES_PATH.PEOPLE, id);
        }
    }, [id]);


    return (
        <Layout>
            {isPeopleLoading && <Loading />}

            {people && (
                <div className={s.page}>
                    <GoBack />
                    <div className={s.body}>
                        <div className={s.left}>
                            <div className={s.poster}>Poster</div>
                            <div>
                                <h1 className={s.title}>{people.name}</h1>
                                <p className={s.text}>Gender: {people.gender}</p>
                                <p className={s.text}>Snin color: {people.skin_color}</p>
                                <p className={s.text}>Eye color: {people.eye_color}</p>
                                <p className={s.text}>Height: {people.height}</p>
                                <p className={s.text}>Mass: {people.mass}</p>
                                <p className={s.text}>Birth year: {people.birth_year}</p>
                            </div>
                        </div>
                        <Like />
                    </div>
                </div>
            )}

        </Layout>
    );
};