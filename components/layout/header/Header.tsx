import type { ReactElement } from "react";

import HeaderItem from "@components/layout/header/HeaderItem";

export default function Header(): ReactElement {
    return (
        <header className={"font-sans text-center py-5 px-6 w-full bg-cyan-600"}>
            <HeaderItem label={"Home"} href={"/"} />
            <HeaderItem label={"Albums"} href={"/albums"} />
            <HeaderItem label={"Comments"} href={"/comments"} />
            <HeaderItem label={"Diagram"} href={"/diagram"} />
        </header>
    );
}


