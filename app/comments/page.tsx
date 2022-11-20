"use client";

import type { Comment } from "@lib/types";

import { useEffect, useState } from "react";

import CommentGrid from "@components/comment/grid/CommentGrid";

export default function Comments() {
    const [comments, setComments] = useState<Comment[] | undefined>(undefined);

    useEffect(() => {
        fetch("http://localhost:3000/api/comments")
            .then(data => data.json())
            .then(data => setComments(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <div className={"text-3xl text-center text-white my-5 underline"}>Comments</div>

            <CommentGrid comments={comments} />
        </div>
    );
}
