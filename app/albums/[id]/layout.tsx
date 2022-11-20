import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type AlbumLayoutProps = {
    children: ReactNode;
};

export default function AlbumLayout({ children }: AlbumLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.CLIENT_SIDE} priority={true} />
        </>
    );
}
