import type { ReactElement } from "react";
import type { Comment } from "@lib/types";

type CommentItemProps = {
    comment: Comment | undefined;
};

export default function CommentItem({ comment }: CommentItemProps): ReactElement {
    if (comment == null) {
        return (
            <div className={"bg-gray-700 m-2 p-2 rounded text-white animate-pulse text-gray-700"}>
                    <div>ID:</div>
                    <div>Post ID:</div>
                    <div>Name:</div>
                    <div>Email:</div>
                    <div>Body:</div>
            </div>
        );
    }

    return (
        <div className={"bg-gray-700 m-2 p-2 rounded text-white hover:bg-gray-800 hover:cursor-pointer"}>
            <a href={`/comments/${comment.id}`}>
                <div>ID: {comment.id}</div>
                <div>Post ID: {comment.postId}</div>
                <div>Name: {comment.name}</div>
                <div>Email: {comment.email}</div>
                <div>Body: {comment.body}</div>
            </a>
        </div>
    );
}


