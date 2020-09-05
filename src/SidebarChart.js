import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';

import './SidebarChart.css';

const SideBarChart = ({addNewChat}) => {

    const [profileImg, setProfileImg] = useState("");
    useEffect(() => {
        const months = ["top_captainmarvel", "top_hulk", "top_blackwidow", "top_daredevil", 
        "drdoom", "top_thor", "top_ironman", "top_captainamerica", "top_wolverine", "redskull", "thanos"];
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        setProfileImg(randomMonth);
    }, [])

    const createChat = () => {
      const roomName = prompt("please enter name for chat");
      if(roomName) {
          // Do some stuff
      }
    }

    return !addNewChat ? ( 
        <div className="sidebarChat">
        <Avatar 
        src= {`http://marvel-force-chart.surge.sh/marvel_force_chart_img/${profileImg}.png`}/>
        <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>Last message....</p>
        </div>
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new chart</h2>
        </div>
    )
}


export default SideBarChart