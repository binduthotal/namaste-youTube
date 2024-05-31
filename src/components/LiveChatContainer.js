import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/generateRandomName";
import { generateRandomString } from "../utils/generateRandomString";

const LiveChatContainer = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    let count = 1;
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            dispatch(
                addMessage({
                    id: count++,
                    name: generateRandomName(),
                    message: generateRandomString(20),
                })
            );
        }, 2000);

        return () => clearInterval(i);
    }, []);

    return (
        <div>
            <div className="overflow-y-scroll flex  flex-col-reverse border border-solid border-gray-600 rounded-b-none w-full lg:h-[600px] md:h-[450px] sm:h-[350px] bg-gray-100 rounded-lg">
                <h1 className="font-bold text-center py-2 ">Live Chat</h1>
                {chatMessages.map((chat) => (
                    <ChatMessage key={chat.id} name={chat.name} message={chat.message} />
                ))}
            </div>
            <form
                className="border border-solid border-gray-500 border-t-0 p-2 flex justify-center"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("On Form Submit",liveMessage);
                    dispatch(addMessage({name:"Bindu",message:liveMessage}))
                    setLiveMessage("")
                }}
            >
                <input
                    type="text"
                    placeholder="Type message"
                    className="w-2/3 border border-solid border-gray-200 rounded-2xl bg-gray-100 p-1"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className="px-2 bg-gray-700 mx-2 text-white rounded-2xl">
                    Send
                </button>
            </form>
        </div>
    );
};

export default LiveChatContainer;
