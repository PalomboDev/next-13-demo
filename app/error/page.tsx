export default async function Error() {
    const data: Response = await fetch("https://mock.codes/404");

    if (data.status === 404) {

    }

    return (
        <div>
            <div className={"text-white text-center my-5 text-3xl"}>Error Page</div>
            <div>

            </div>
        </div>
    );
}
