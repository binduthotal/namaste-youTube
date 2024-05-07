import React from "react";
import { commentsData } from "../utils/constants";
import CommentDisplay from "./CommentDisplay";

const CommentsContainer = () => {
    return commentsData.map((comment) => <CommentDisplay key={comment.id} comments={comment} />);
};

export default CommentsContainer;
