import React, { useState } from "react";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [hidden, setHidden] = useState(false)

    return (
        <div>
            {!hidden && <Header />}
            {children}
            {!hidden && <Footer />}
        </div>
    )
}