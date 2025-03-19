import React from "react";

import { Hero } from "../../../widgets/hero";
import { HowWe } from "../../../widgets/HowWe";

import { Layout } from "../../../app/layout";

export const Home: React.FC = () => {
    return(
        <Layout>
            <Hero />
            <HowWe />
        </Layout>
    )
}