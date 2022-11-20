import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type AlbumsLayoutProps = {
    children: ReactNode;
};

export default function AlbumsLayout({ children }: AlbumsLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.SERVER_SIDE} priority={false} />
        </>
    );
}
