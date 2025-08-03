import React from 'react'
import prasadImage from '../assets/prasad.png';
import  "./UserCard.css";



const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name '>{props.name}</p>
        <img id='user-image' src={props.image}  alt='img'></img>
        <p id='user-desc'>{props.desc}</p>
       
    </div>
  )
}

export default UserCard
