import type { ReactElement } from "react";
import type { Comment } from "@lib/types";

type CommentItemProps = {
    comment: Comment;
};

export default function CommentItem({ comment }: CommentItemProps): ReactElement {
    return (
        <div className={"grid place-items-center"}>
            <div className={"bg-gray-700 m-2 p-2 rounded text-white w-6/12"}>
                <div>ID: {comment.id}</div>
                <div>Post ID: {comment.postId}</div>
                <div>Name: {comment.name}</div>
                <div>Email: {comment.email}</div>
                <div>Body: {comment.body}</div>
            </div>
        </div>
    );
}


