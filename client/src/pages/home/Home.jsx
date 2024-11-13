import React from 'react'
import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Hero from '../../components/hero/Hero'
import Course from '../../components/course/Course'
import Webinar from '../../components/webinar/Webinar'

const Home = () => {
  return (
    <div>
         <Topbar />
         <Hero  />
         <Course  />
         <Webinar />

    </div>
  )
}

export default Home
