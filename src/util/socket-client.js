import io from "socket.io-client";
const ENDPOINT = "localhost:3000";

export const socket = io(ENDPOINT);
