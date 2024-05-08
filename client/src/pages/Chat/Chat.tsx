import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
let socket: Socket;
function Chat() {
  const ENDPOINT = "localhost:5000";
  const [queryData, setQueryData] = useState<{
    name: string;
    room: string;
  }>();
  useEffect(() => {
    const data = queryString.parse(location.search);
    if (!data) return;
    setQueryData(data as { name: string; room: string });
    socket = io(ENDPOINT);
    console.log(socket);
    socket.emit(
      "join",
      { name: data.name, room: data.room },
      (error: { msg: string }) => {
        console.log(error);
      }
    );
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  return <div>Chat</div>;
}

export default Chat;
