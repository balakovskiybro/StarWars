import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from '../style.module.scss';
import { useFetching } from "../../../shared/hooks/useFetching";
import PostService from "../../../shared/api/PostService";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import { Layout } from "../../../app/layout";
import { StarshipTypes } from "../../../shared/types/Starship";
import GoBack from "../../../shared/ui/GoBack";
import Loading from "../../../shared/ui/Loading";
import Like from "../../../shared/ui/Like";


export const StarshipIdPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [starship, setStarship] = useState<StarshipTypes | null>(null);

    const [fetchStarshipId, isStarshipLoading] = useFetching(
        async (url: 'starships', id: string) => {
            const response = await PostService.getById(id, url);
            setStarship(response.data);
        }
    );

    useEffect(() => {
        if (id) {
            fetchStarshipId(ROUTES_PATH.STARSHIPS, id);
        }
    }, [id]);


    return (

        <Layout>
            {isStarshipLoading && <Loading />}
            {starship && (
                <div className={s.page}>
                    <GoBack />
                    <div className={s.body}>
                        <div className={s.left}>
                            <div className={s.poster}>Poster</div>
                            <div>
                                <h1 className={s.title}>{starship.name}</h1>
                                <p className={s.text}>Model: {starship.model}</p>
                                <p className={s.text}>Manufacturer: {starship.manufacturer}</p>
                                <p className={s.text}>Passengers: {starship.passengers}</p>
                                <p className={s.text}>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
                            </div>
                        </div>
                        <Like />
                    </div>
                </div>
            )}
        </Layout>
    );
};