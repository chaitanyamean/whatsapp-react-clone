import React, { useState } from 'react'

import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Chat =() => {
        const [seed, setSeed] = useState("")
        const [message, setMessage] = useState("")

        const sendMessage = (e) => {
            e.preventDefault();
            console.log('You type', message)
            setMessage("");
          }

        return(
            <div className="chat">
            <div className="chat__header">
            <Avatar src= {`http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_ironman.png`}/>
           <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at....</p>
           </div>
           <div className="chat__headerRight">
           <IconButton>
                <SearchOutlinedIcon />
           </IconButton>
           <IconButton>
                <AttachFileIcon />
           </IconButton>
           <IconButton>
                <MoreVertIcon />
           </IconButton>
           </div>
            </div>
            <div className="chat__body">
            <p className="chat__message">
                Hey guys
            </p>
            <p className={`chat__message ${true &&
                        "chat__reciever"}`}>
            <span className="chat__name">
                krishna
            </span>
                Hey guys            
                <span className="chat__timestamp">3:52pm</span>
                </p>
            </div>
            <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input type="text" 
                value={message}
                onChange={
                    (e) => setMessage(e.target.value)
                }
                placeholder="type a text"/>
                <button onClick={sendMessage} 
                type="submit"
                >
                Send a message
                </button>
            </form>
            <MicIcon />
            </div>
            </div>
        )
}

export default Chat