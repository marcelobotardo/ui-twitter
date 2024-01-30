import React from 'react'
import ReactDOM from 'react-dom/client'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User  } from 'phosphor-react'


import './global.css';

import twitteerlogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitteerlogo} alt="Logo"/>
        
        <nav className='main-navigation'>
          <a className='active' href=''>
            <House weight='fill'/>
            Home
          </a>
          <a href=''>
            <Hash />
            Explore
          </a>
          <a href=''>
            <Bell />
            Notifications
          </a>
          <a href=''>
            <Envelope />
            Messages
          </a>
          <a href=''>
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href=''>
            <FileText />
            Lists
          </a>
          <a href=''>
            <User />
            Profile
          </a>
          <a href=''>
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className='new-tweet' typeof='button'>
          Tweet</button>
      </aside>
      <div className="content">
        content
      </div>
    </div>
 </React.StrictMode>,
)