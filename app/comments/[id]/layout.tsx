import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type CmomentLayoutProps = {
    children: ReactNode;
};

export default function CmomentLayout({ children }: CmomentLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.SERVER_SIDE} priority={true} />
        </>
    );
}
