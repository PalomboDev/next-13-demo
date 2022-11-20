import { Time } from "@lib/types";

export default async function StaticGenerated() {
    const time: Time = await fetch('https://worldtimeapi.org/api/timezone/America/Chicago', { cache: "force-cache" })
        .then(data => data.json());
    const dateTime: Date = new Date(time.datetime);

    return (
        <div className={"text-5xl text-white text-center mt-5"}>
            <div className={"text-2xl mb-5"}>This page was statically generated (on build time) at:</div>

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
