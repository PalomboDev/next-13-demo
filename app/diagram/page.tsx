import ServerBox from "@components/diagram/ServerBox";
import ClientBox from "@components/diagram/ClientBox";

export default async function Diagram() {
    return (
        <div className={"text-5xl text-white text-center"}>
            <div className={"text-3xl text-center text-white my-5 underline"}>Diagram</div>

            <div className={"text-2xl mb-5"}>All of the server components on this page are dynamically fetched (cache no-store)</div>

            {/*@ts-ignore*/}
            <ServerBox hint={false}>
                <ClientBox>
                    {/*@ts-ignore*/}
                    <ServerBox hint={true}>
                        <ClientBox>
                            {/*@ts-ignore*/}
                            <ServerBox hint={true}>

                            </ServerBox>
                        </ClientBox>
                    </ServerBox>
                </ClientBox>
            </ServerBox>
        </div>
    );
}
