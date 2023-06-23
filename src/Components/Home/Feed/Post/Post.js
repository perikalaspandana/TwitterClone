import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
//import { Avatar } from "@mui/material"
import { MoreHoriz,ChatBubbleOutline,RepeatOnOutlined,FavoriteBorderOutlined,PublishOutlined, Repeat } from '@mui/icons-material'

const Post = () => {
  return (
    <div className = 'post'>
     <Avatar src='https://pbs.twimg.com/media/FyeEey9aYAAjc2C.jpg'
     className='post__avatar'/>
     <div className='post__content'> 
     <div className='port__header'>
     <div className='post__titles'>
        <h3>John Doe</h3>
        <h4>@johndoe</h4>
     </div>
     <MoreHoriz className='post__options'/>
     </div>
     <div className='post__description'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     </div>
     <div className='post__media'>
        <img   src='https://pbs.twimg.com/media/FyeEey9aYAAjc2C.jpg ' alt=''/>

     </div>
     <div className='post__footer'>
        <ChatBubbleOutline fontSize='small'/>
        <Repeat fontSize='small'/>
        <FavoriteBorderOutlined fontSize='small'/>
        <PublishOutlined fontSize='small'/>

     </div>
    </div>
    </div>
  )
}

export default Post