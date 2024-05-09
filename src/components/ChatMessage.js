import React from "react";

const ChatMessage = ({name,message}) => {
    return (
            <div className="flex items-baseLine py-2 text-pretty px-3">
                <img
                    alt="user"
                    className="cursor-pointer px-1 h-8"
                    src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
                />
                <h2 className="font-bold px-2">{name}</h2>
                <h2>{message}</h2>
            </div>

    );
};

export default ChatMessage;
