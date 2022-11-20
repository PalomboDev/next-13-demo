import AlbumGrid from "@components/album/grid/AlbumGrid";

export default async function Albums() {
    const albums = await fetch("http://localhost:3000/api/albums").then(data => data.json());

    return (
        <div>
            <div className={"text-3xl text-center text-white my-5 underline"}>Albums</div>

            <AlbumGrid albums={albums} />
        </div>
    );
}
