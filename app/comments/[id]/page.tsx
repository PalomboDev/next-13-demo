import type { Comment } from "@lib/types";

import CommentItem from "@components/comment/CommentItem";

type CommentProps = {
    params: {
        id: string;
    };
};

export default async function Comment({ params }: CommentProps) {
    const { id } = params;
    const comment: Comment = await fetch(`http://localhost:3000/api/comments/${id}`).then(data => data.json());

    return (
        <div>
            <div className={"text-3xl text-center text-white my-5 underline"}>Comment {id}</div>

            <CommentItem comment={comment} />
        </div>
    );
}
