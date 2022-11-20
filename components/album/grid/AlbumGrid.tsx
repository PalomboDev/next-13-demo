import type { ReactElement } from "react";
import type { Album } from "@lib/types";

import AlbumGridItem from "./AlbumGridItem";

type AlbumGridProps = {
    albums: Album[] | undefined;
};

export default function AlbumGrid({ albums }: AlbumGridProps): ReactElement {
    return (
        <div className={"grid grid-cols-4"}>
            {albums != null && albums.map((album: Album, index: number) => (
                <AlbumGridItem key={index} album={album} />
            ))}
        </div>
    );
}


