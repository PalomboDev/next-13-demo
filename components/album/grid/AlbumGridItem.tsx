import type { ReactElement } from "react";
import type { Album } from "@lib/types";

type AlbumGridItemProps = {
    album: Album;
};

export default function AlbumGridItem({ album }: AlbumGridItemProps): ReactElement {
    return (
        <div className={"bg-gray-700 m-2 p-2 rounded text-white hover:bg-gray-800 hover:cursor-pointer"}>
            <a href={`/albums/${album.id}`}>
                <div>ID: {album.id}</div>
                <div>User ID: {album.userId}</div>
                <div>Title: {album.title}</div>
            </a>
        </div>
    );
}


