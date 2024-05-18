import React from 'react'
import "./Widgets.css"
import SearchIcon from '@mui/icons-material/Search';

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widgets_searchIcon'></SearchIcon>
        <input placeholder='Read other minds' type='text'></input>
      </div>
      <div className='widgets_widgetContainer'>
        <h2>What are your thoughts</h2>
        <TwitterTweetEmbed tweetId={'85855117786005040'}></TwitterTweetEmbed>
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='garyvee'
        options={{height: 200}}></TwitterTimelineEmbed>
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='mcuban'
        options={{height: 200}}></TwitterTimelineEmbed>
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='GrantCardone'
        options={{height: 200}}></TwitterTimelineEmbed>
        <TwitterShareButton url={"https://x.com/Pulkit_707/status/1791738175569756173"}
        options={{text:"Sharing thought on X", via:"@Pulkit_707"}}></TwitterShareButton>
      </div>
    </div>
  )
}

export default Widgets
