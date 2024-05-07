import React from "react";

const CommentDisplay = ({ comments }) => {
    return (
        <div className=" px-3 py-2 my-2 border border-solid border-l-gray-500">
            <div className="flex bg-gray-100 ">
                <img
                    className="w-8 h-8"
                    alt="user"
                    src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
                />
                <div className="pl-3">
                    <p className="font-bold">{comments.name}</p>
                    <p>{comments.text}</p>
                    
                </div>
            </div>
            <div className="ml-5 pl-5">
                {comments.reply.map((r) => (
                    <CommentDisplay key={r.id} comments={r} />
                ))}
            </div>
        </div>
    );
};

export default CommentDisplay;
