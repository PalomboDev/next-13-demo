import Spinner from "@components/Spinner";

export default async function Loading() {
    return (
        <div className={"text-3xl m-5"}>
            <Spinner />
        </div>
    );
}
