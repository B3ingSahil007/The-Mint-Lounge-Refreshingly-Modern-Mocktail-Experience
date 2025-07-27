import React from 'react'
import aboutOne from '../assets/images/abt1.png'
import aboutTwo from '../assets/images/abt2.png'
import aboutThree from '../assets/images/abt3.png'
import aboutFour from '../assets/images/abt4.png'
import aboutFive from '../assets/images/abt5.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2, #about p', { type: 'words' });

    const scrollTimeline = gsap.timeline({ scrollTrigger: { trigger: '#about', start: 'top center' } });
    scrollTimeline.from(titleSplit.words, { yPercent: 100, duration: 2, ease: 'expo.out', stagger: 0.02, delay: 0.8, opacity: 0 }).from('.top-grid div, .bottom-grid div', { opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04 }, '-=0.5');

  }, [])

  return (
    <>
      <div id='about'>
        <div className='mb-16 md:px-0 px-5'>
          <div className='content'>
            <div className="md:col-span-8">
              <p className="bg-yellow badge animate-bounce">Best Cocktails</p>
              <h2 className="text-4xl md:text-6xl font-modernNegra leading-tight text-white">
                Crafted with Passion Served with Style<br />
                <span className="text-yellow">Mocktails That Refresh Your Soul</span>
              </h2>
            </div>
            <div className="sub-content">
              <p>
                At The Mint Lounge, we’re more than just mocktails — we’re storytellers of flavor. Each drink is a handcrafted experience, designed to refresh your senses and spark moments worth savoring.
              </p>
              <div>
                <p className='md:text-3xl text-xl font-bold'>
                  <span className='text-yellow'>4.6</span> / 5
                </p>
                <p className='text-sm text-white-100'>More Than +12000 customers</p>
              </div>
              <div>
                <p className='md:text-2xl text-xl font-bold'>
                  <span className='text-yellow'>3</span> Reasons to Visit
                </p>
                <p>
                  <span className='text-yellow'>1.</span> Exquisite Cocktails
                </p>
                <p>
                  <span className='text-yellow'>2.</span> Unforgettable Moments
                </p>
                <p>
                  <span className='text-yellow'>3.</span> Friendly Atmosphere
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='top-grid'>
          <div className='md:col-span-3'>
            <div>
              <img className='hover:scale-110 transition-all duration-400' src={aboutOne} alt="Grid_About_One" />
            </div>
          </div>
          <div className='md:col-span-6'>
            <div>
              <img className='hover:scale-110 transition-all duration-400' src={aboutTwo} alt="Grid_About_Two" />
            </div>
          </div>
          <div className='md:col-span-3'>
            <div>
              <img className='hover:scale-110 transition-all duration-400' src={aboutThree} alt="Grid_About_Three" />
            </div>
          </div>
        </div>
        <div className='bottom-grid'>
          <div className='md:col-span-8'>
            <div>
              <img className='hover:scale-110 transition-all duration-400' src={aboutFour} alt="Grid_About_Four" />
            </div>
          </div>
          <div className='md:col-span-4'>
            <div>
              <img className='hover:scale-110 transition-all duration-400' src={aboutFive} alt="Grid_About_Five" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
