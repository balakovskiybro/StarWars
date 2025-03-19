import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from '../style.module.scss';
import { useFetching } from "../../../shared/hooks/useFetching";
import PostService from "../../../shared/api/PostService";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import { Layout } from "../../../app/layout";
import { VehiclesTypes } from "../../../shared/types/Vehicles";
import GoBack from "../../../shared/ui/GoBack";
import Loading from "../../../shared/ui/Loading";
import Like from "../../../shared/ui/Like";


export const VehicleIdPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [vehicle, setVehicle] = useState<VehiclesTypes | null>(null);

    const [vehicleStarshipId, isVehicleLoading] = useFetching(
        async (url: 'vehicles', id: string) => {
            const response = await PostService.getById(id, url);
            setVehicle(response.data);
        }
    );

    useEffect(() => {
        if (id) {
            vehicleStarshipId(ROUTES_PATH.VEHICLES, id);
        }
    }, [id]);


    return (

        <Layout>
            {isVehicleLoading && <Loading />}
            {vehicle && (
                <div className={s.page}>
                    <GoBack />
                    <div className={s.body}>
                        <div className={s.left}>
                            <div className={s.poster}>Poster</div>
                            <div>
                                <h1 className={s.title}>{vehicle.name}</h1>
                                <p className={s.text}>Model: {vehicle.model}</p>
                                <p className={s.text}>Crew: {vehicle.crew}</p>
                                <p className={s.text}>Passengers: {vehicle.passengers}</p>
                                <p className={s.text}>Manufacturer: {vehicle.manufacturer}</p>
                                <p className={s.text}>Length: {vehicle.length}</p>
                            </div>
                        </div>
                        <Like />
                    </div>
                </div>
            )}
        </Layout>
    );
};