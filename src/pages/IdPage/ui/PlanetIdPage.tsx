import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from '../style.module.scss';
import { useFetching } from "../../../shared/hooks/useFetching";
import PostService from "../../../shared/api/PostService";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import { Layout } from "../../../app/layout";
import { PlanetsTypes } from "../../../shared/types/Planet";
import GoBack from "../../../shared/ui/GoBack";
import Loading from "../../../shared/ui/Loading";
import Like from "../../../shared/ui/Like";


export const PlanetIdPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [planet, setPlanet] = useState<PlanetsTypes | null>(null);

    const [fetchPlanetId, isPlanetLoading] = useFetching(
        async (url: 'planets', id: string) => {
            const response = await PostService.getById(id, url);
            setPlanet(response.data);
        }
    );

    useEffect(() => {
        if (id) {
            fetchPlanetId(ROUTES_PATH.PLANETS, id);
        }
    }, [id]);


    return (
        <Layout>
            {isPlanetLoading && <Loading />}
            {planet && (
                <div className={s.page}>
                    <GoBack />
                    <div className={s.body}>
                        <div className={s.left}>
                            <div className={s.poster}>Poster</div>
                            <div>
                                <h1 className={s.title}>{planet.name}</h1>
                                <p className={s.text}>Diametr: {planet.diameter}</p>
                                <p className={s.text}>Climate: {planet.climate}</p>
                                <p className={s.text}>Gravity: {planet.gravity}</p>
                                <p className={s.text}>Terrain: {planet.terrain}</p>
                            </div>
                        </ div>
                        <Like />
                    </div>
                </div>
            )}
        </Layout>
    );
};