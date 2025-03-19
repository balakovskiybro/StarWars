import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../../pages/home";
import { FilmsIdPage } from "../../pages/IdPage/ui/FilmIdPage";
import { PeopleIdPage } from "../../pages/IdPage/ui/PeopleIdPage";
import { PlanetIdPage } from "../../pages/IdPage/ui/PlanetIdPage";
import { StarshipIdPage } from "../../pages/IdPage/ui/StarshipIdPage";
import { VehicleIdPage } from "../../pages/IdPage/ui/VehicleIdPage";

export const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/films/:id" element={<FilmsIdPage />} />
            <Route path="/people/:id" element={<PeopleIdPage />} />
            <Route path="/planets/:id" element={<PlanetIdPage />} />
            <Route path="/starships/:id" element={<StarshipIdPage />} />
            <Route path="/vehicles/:id" element={<VehicleIdPage />} />
        </Routes>
    )
}