import type { ReactElement } from "react";
import type { Comment } from "@lib/types";

import CommentGridItem from "./CommentGridItem";

type CommentGridProps = {
    comments: Comment[] | undefined;
};

export default function CommentGrid({ comments }: CommentGridProps): ReactElement {
    return (
        <div className={"grid grid-cols-4"}>
            {comments != null && comments.map((comment: Comment, index: number) => (
                <CommentGridItem key={index} comment={comment} />
            ))}

            {comments == null && Array(24).fill(0).map((_, index: number) => (
                <CommentGridItem key={index} comment={undefined} />
            ))}
        </div>
    );
}


