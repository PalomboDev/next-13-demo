import type { Time } from "@lib/types";

import CodeBlock from "@components/CodeBlock";

export default async function Loading() {
    const time: Time = await fetch("https://worldtimeapi.org/api/timezone/America/Chicago", { next: { revalidate: 30 } } )
        .then(data => data.json());
    const dateTime: Date = new Date(time.datetime);

    return (
        <div className={"text-5xl text-white text-center mt-5"}>
            <div className={"text-2xl"}>This page's data is cached and revalidated every 30 seconds</div>

            <div className={"my-10"}>
                <CodeBlock
                    code={"fetch(\"https://worldtimeapi.org/api/timezone/America/Chicago\", { next: { revalidate: 30 } } )"}
                />
            </div>

            <div className={"mb-5 border-2 border-black p-2 w-fit m-auto"}>
                <div className={"text-3xl text-red-400"}>Date Time: {dateTime.toLocaleString()}</div>
                <div className={"text-2xl"}>Time Zone: {time.timezone}</div>
                <div className={"text-2xl"}>Time Zone (Abbreviation): {time.abbreviation}</div>
            </div>

            <div className={"mb-5 border-2 border-black p-2 w-fit m-auto"}>
                <div className={"text-3xl text-purple-400"}>UTC Date Time: {dateTime.toUTCString()}</div>
                <div className={"text-2xl"}>UTC Offset: {time.utc_offset}</div>
            </div>
        </div>
    );
}
