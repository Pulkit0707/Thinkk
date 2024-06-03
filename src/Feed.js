import React,{useEffect, useState} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
  const [posts, setPosts]=useState([]);
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>(
      setPosts(snapshot.docs.map(doc=>doc.data()))
    ))
  },[]);
  return (
    <div className='feed'>
      <div className='feed_header'>
      <h2>Thoughts From The World</h2>
      </div>
      <TweetBox/>
      <FlipMove>
      {posts.map(post=>(
        <Post
        key={post.text}
        displayName={post.displayName}
        userName={post.userName}
        text={post.text}
        image={post.image}/>
      ))}
      </FlipMove>
    </div>
  )
}

export default Feed
