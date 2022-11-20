import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type RevalidateLayoutProps = {
    children: ReactNode;
};

export default function RevalidateLayout({ children }: RevalidateLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.SERVER_SIDE} priority={true} />
        </>
    );
}
