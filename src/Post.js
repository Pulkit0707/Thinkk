import React,{forwardRef} from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post= forwardRef( ({
    displayName,
    userName,
    text,
    image
},ref) =>{
  return (
    <div className='post' ref={ref}>
      <div className='post_body'>
        <div className='post_header'>
            <div className='post_headerText'>
                <h3>{displayName}
                    <span className='post_headerSpecial'>@{userName}</span>
                </h3>
            </div>
            <div className='post_headerDescription'>
                <p>{text}</p>
            </div>
        </div>
        <img src={image} alt="Cool ah image"></img>
        <div className='post_footer'>
            <ChatBubbleOutlineIcon fontSize="small"></ChatBubbleOutlineIcon>
            <RepeatIcon fontSize="small"></RepeatIcon>
            <FavoriteBorderIcon fontSize="small"></FavoriteBorderIcon>
            <PublishIcon fontSize="small"></PublishIcon>
        </div>
      </div>
    </div>
  )
})

export default Post
