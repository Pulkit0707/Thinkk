import React,{useState} from 'react'
import './TweetBox.css'
import Button from '@mui/material/Button';
import db from './firebase'


function TweetBox() {
  const [tweetMessage, setTweetMessage]=useState("");
  const [tweetImage, setTweetImage]=useState("");
  const sendTweet=(e)=>{
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Pulkit Chawla",
      userName: 'pulkit0707',
      text: tweetMessage,
      image: tweetImage,
    })
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
            <input 
            onChange={(e)=>setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder='What are you thinking?' 
            type='text'></input>
        </div>
        <input className='tweetBox_imageInput'
        onChange={(e)=>setTweetImage(e.target.value)}
        value={tweetImage}
         placeholder='Optional: Is there an image in mind?' type='text'></input>
        <Button onClick={sendTweet} type="submit" className='tweetBox_tweetButton'>Share Thought</Button>
      </form>
    </div>
  )
}

export default TweetBox
