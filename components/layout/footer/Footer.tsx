import type { ReactElement } from "react";

import { FooterType } from "@lib/types";

type FooterProps = {
    type: FooterType;
    priority: boolean;
};

export default function Footer({ type, priority }: FooterProps): ReactElement {
    let text: string = `This page's content is ${type === FooterType.SERVER_SIDE ? "server" : "client"} side rendered`;
    let color: string = type === FooterType.SERVER_SIDE ? "bg-orange-600" : "bg-green-600";
    let zIndex: string = priority ? "z-50" : "z-40";

    return (
        <footer className={`font-sans text-center py-5 px-6 w-full bottom-0 left-0 fixed text-white ${color} ${zIndex}`}>
            {text}
        </footer>
    );
}


