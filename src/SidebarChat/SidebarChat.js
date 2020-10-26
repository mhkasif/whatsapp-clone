import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./sidebarChat.scss"
function SidebarChat({addNewChat}) {
    const [seed,setSeed] =useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);
    return (
        !addNewChat?
        <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
        <div className="sidebarChat__info">
        <h3>nbcvmnbxcv</h3>
        <p>nbcvmnbxcv</p>

        </div>

        </div>
        :<div className="sidebarChat" onClick={()=>{}}>
<h2>Add new Chat</h2>
</div>
    )
}

export default SidebarChat
