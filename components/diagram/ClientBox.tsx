"use client";

import { ReactElement, useEffect, useState } from "react";

type ClientBoxProps = {
    children: ReactElement | ReactElement[];
};

export default function ClientBox({ children }: ClientBoxProps ) {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Fake load to replicate an API call
        setTimeout(() => {
            setLoading(false);
        }, (Math.random() * 100) * 100);
    }, []);

    if (loading) {
        return (
            <div className={"bg-gray-700 p-5 border-2 border-black"}>
                <div className={"mb-5"}>Client - Loading</div>

                {/*{children}*/}
            </div>
        );
    }

    return (
        <div className={"bg-green-600 p-5 border-2 border-black"}>
            <div className={"mb-5"}>Client</div>

            {children}
        </div>
    );
}
