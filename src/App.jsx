import gsap from 'gsap'
import './index.css'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <>
      {/* <h1 className='text-8xl font-modern-negra text-indigo-300'>The Mint Lounge</h1> */}
      <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
      </main>
    </>
  )
}

export default App
