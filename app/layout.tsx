import "./global.css";

import { ReactNode } from "react";

import Header from "@components/layout/header/Header";

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head />

            <body className={"bg-gray-900"}>
                <Header />
                {children}
            </body>
        </html>
    );
}
