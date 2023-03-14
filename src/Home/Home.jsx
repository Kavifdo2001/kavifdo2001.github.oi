import React from 'react'
import LeftPane from '../components/LeftPane/LeftPane'
import NavBar from '../components/Navigation/NavBar'
import PostPane from '../components/PostPane/PostPane'
import RightPane from '../components/RightPane/RightPane'
import './home.css'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='bottom'>
      <LeftPane />
      <PostPane />

     </div>

    </div>
  )
}
