import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PersonCard from "./cards/PersonCard";


const RecentChats = () => {
    const [chats, setChats] = useState([]);
    const { user } = useSelector((store) => store.user);


    const getChat = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:3000/api/chat/${user.userId}`
            );
            setChats(data);
            // dispatch(setCurrentChats(data))

            console.log(data);
        } catch (error) { }
    };

    useEffect(() => {
        getChat();
    }, []);

    if (chats) {
        return (
            <div>
                {chats.map(({ members, _id }, i) => {
                    return <PersonCard key={i} members={members} chatId={_id} />;
                })}
            </div>
        );
    }
    return <h4>loading ....</h4>;
};

export default RecentChats;
