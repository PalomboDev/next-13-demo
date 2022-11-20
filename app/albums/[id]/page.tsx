"use client";

import type { Album } from "@lib/types";

import { useEffect, useState } from "react";

import AlbumItem from "@components/album/AlbumItem";

type AlbumProps = {
    params: {
        id: string;
    };
};

export default function Album({ params }: AlbumProps) {
    const { id } = params;

    const [album, setAlbum] = useState<Album | undefined>(undefined);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then(data => data.json())
            .then(data => setAlbum(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <div className={"text-3xl text-center text-white my-5 underline"}>Album {id}</div>

            <AlbumItem album={album} />
        </div>
    );
}
