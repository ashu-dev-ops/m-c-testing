import io from "socket.io-client";
const ENDPOINT = "https://mern-chat-back.onrender.com/";

export const socket = io(ENDPOINT);
