import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type LoadingLayoutProps = {
    children: ReactNode;
};

export default async function LoadingLayout({ children }: LoadingLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.SERVER_SIDE} priority={true} />
        </>
    );
}
