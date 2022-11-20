"use client";

import type { ReactElement } from "react";
import type { Album } from "@lib/types";

type AlbumItemProps = {
    album: Album | undefined;
};

export default function AlbumItem({ album }: AlbumItemProps): ReactElement {
    if (album == null) {
        return (
            <div className={"bg-gray-700 m-2 p-2 rounded text-white text-gray-700 animate-pulse w-6/12 m-auto"}>
                <div>ID:</div>
                <div>User ID:</div>
                <div>Title:</div>
            </div>
        );
    }

    return (
        <div className={"bg-gray-700 m-2 p-2 rounded text-white w-6/12 m-auto"}>
            <div>ID: {album.id}</div>
            <div>User ID: {album.userId}</div>
            <div>Title: {album.title}</div>
        </div>
    );
}


