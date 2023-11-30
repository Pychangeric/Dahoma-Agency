import React from 'react'
import Intro from './components/Intro'
import Detail from './components/Detail'
import Blog from './components/Blog'
import Footer from"./components/Footer"
import Navbar from './components/Navbar'
function MainHome() {
    return (
        <div >
            <Navbar />
            <Intro />
            <Detail />
            <Blog />
            {/* <Footer /> */}
        </div>
    )
}

export default MainHome