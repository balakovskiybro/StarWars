import React, { useEffect, useState } from "react";
import { useFetching } from "../../../shared/hooks/useFetching";
import PostService from "../../../shared/api/PostService";
import Next from "../../../shared/icons/Next";
import Back from "../../../shared/icons/Prev";
import s from '../style.module.scss'
import { Link } from "react-router-dom";
import { VehiclesTypes } from "../../../shared/types/Vehicles";
import { ROUTES_PATH } from "../../../shared/consts/routesPath";
import Loading from "../../../shared/ui/Loading";

export const Vehicles: React.FC = () => {
    const [vehicles, setVehicles] = useState<VehiclesTypes[]>([]);
    const [page, setPage] = useState(1)
    const [hasNext, setHasNext] = useState(false);
    const [hasPrev, setHasPrev] = useState(false);

    const [fetchVehicles, isVehiclesLoading] = useFetching(
        async (url: string, page: number) => {
            const response = await PostService.getAll(url, page);
            setVehicles(response.data.results);
            setHasNext(!!response.data.next);
            setHasPrev(!!response.data.previous);
        }
    );


    useEffect(() => {
        fetchVehicles(ROUTES_PATH.VEHICLES, page);
    }, [page]);


    return (
        <div className={s.post}>
            {isVehiclesLoading && <Loading />}
            {hasPrev && (
                <button onClick={() => setPage((prev) => prev - 1)}>
                    <Back />
                </button>
            )}
            <ul className={s.list}>
                {vehicles.map((vehicle) => {
                    const id = vehicle.url.split("/").slice(-2, -1)[0];
                    return (
                        <Link key={id} to={`/vehicles/${id}`}>
                            <li className={s.link}>{vehicle.name}</li>
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