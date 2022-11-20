import { FooterType } from "@lib/types";
import { ReactNode } from "react";

import Footer from "@components/layout/footer/Footer";

type CommentLayoutProps = {
    children: ReactNode;
};

export default function CommentLayout({ children }: CommentLayoutProps) {
    return (
        <>
            {children}
            <Footer type={FooterType.CLIENT_SIDE} priority={false} />
        </>
    );
}
