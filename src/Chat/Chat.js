import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../Hooks/StateProvider";
import "./Chat.scss";
import firebase from "firebase";
const Chat = () => {
  const [seed, setSeed] = React.useState("");
  const [input, setInput] = useState("");
  const { id } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  console.log(messages);
  React.useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .onSnapshot((snapshot) => {
          return setRoomName(snapshot.data().name);
        });
    }
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => {
            console.log(doc.data());
            return doc.data();
          })
        )
      );
  }, [id]);
  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .add({
        message: input,
        name: user.displayName || 'user',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__header-info">
          <h3>{roomName}</h3>
          <p>Last seen at {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()
          }</p>
        </div>
        <div className="chat__header-icons">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message, x) => (
          <p key={x} className={`chat__message ${user.displayName===message.name?"chat__receiver":''}`}>
            <span className="chat__message-name">{message?.name}</span>
            {message?.message}
            <span className="chat__message-time">
              {new Date(message?.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
