import type { ReactElement } from "react";

type HeaderItemProps = {
    label: string;
    href: string;
};

export default function HeaderItem({ label, href }: HeaderItemProps): ReactElement {
    return (
        <a href={href} className={"text-lg no-underline text-white ml-5 hover:text-black"}>{label}</a>
    );
}


