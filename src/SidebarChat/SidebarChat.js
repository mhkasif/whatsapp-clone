import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from '../firebase';
import "./sidebarChat.scss"
function SidebarChat({addNewChat,name,id}) {
    const [seed,setSeed] =useState("")
    const [messages,setMessages]=useState([])
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);
    useEffect(()=>{
        if(id)
        db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>setMessages(snapshot.docs.map(doc=>doc.data())))
    },[id])
    const addNewChatFunc=()=>{
        const roomName=prompt("Please enter name for chat");
        if(roomName){
            db.collection('rooms').add({
                name:roomName
            })
        }
    }
    return (
        !addNewChat?
        <Link to={  `/${id}`}>
        <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
        <div className="sidebarChat__info">
        <h3>{name}</h3>
        <p>{messages[0]?.message}</p>

        </div>

        </div>
        </Link>
        :<div className="sidebarChat" onClick={addNewChatFunc}>
<h2>Add new Chat</h2>
</div>
    )
}

export default SidebarChat
