import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type StaticGeneratedLayoutProps = {
    children: ReactNode;
};

export default function StaticGeneratedLayout({ children }: StaticGeneratedLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.SERVER_SIDE} priority={true} />
        </>
    );
}
