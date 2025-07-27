import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5"
    >
      <h2 className="text-6xl md:text-8xl font-modernNegra text-yellow mb-4">
        About Us
      </h2>
      <p className="text-xl md:text-2xl text-white opacity-70">
        We're stirring up something refreshing...
      </p>
      <p className="mt-4 text-2xl md:text-4xl font-modernNegra text-white animate-pulse">
        Coming Soon 🍃
      </p>
    </section>
  )
}

export default About
