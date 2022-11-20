import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type ErrorLayoutProps = {
    children: ReactNode;
};

export default function ErrorLayout({ children }: ErrorLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.SERVER_SIDE} priority={true} />
        </>
    );
}
