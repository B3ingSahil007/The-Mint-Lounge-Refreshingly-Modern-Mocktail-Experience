import React from 'react';
import { featureLists, goodLists } from '../../constants';
import checkImage from '../../public/images/check.png';
import underImage from '../assets/under-img.jpg';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Make sure to register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // Initial fade-in animation
    gsap.fromTo('.will-fade', { opacity: 0, xPercent: -200 }, { xPercent: 0, opacity: 1, duration: 2, ease: 'power1.inOut' });
    
    // Set up scroll trigger for the upward movement of "The ART"
    gsap.to(".art-title", {
      y: -200, // Move up by 100px
      scrollTrigger: {
        trigger: '#art',
        start: 'top top',
        end: '+=300', // Adjust this value based on when you want the movement to complete
        scrub: true, // Smooth scrubbing effect
      }
    });

    const start = isMobile ? 'top 20%' : 'top top';
    const maskTimeline = gsap.timeline({ 
      scrollTrigger: { 
        trigger: '#art', 
        start, 
        end: 'bottom center', 
        scrub: 1.5, 
        pin: true 
      } 
    });
    
    maskTimeline
      .to('.will-fade:not(.art-title)', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
      .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut' })
      .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  }, []);

  return (
    <>
      <div id="art">
        <div className='container mx-auto h-full pt-20'>
          <h2 className='will-fade art-title'>The ART</h2>
          <div className="content">
            <ul className="space-y-4 will-fade">
              {goodLists.map((feature, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <img src={checkImage} alt="Check_Image" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div className="cocktail-img">
              <img src={underImage} alt="Under_Image" className='abs-center masked-img size-full object-contain' />
            </div>
            <ul className="space-y-4 will-fade">
              {featureLists.map((feature, index) => (
                <li key={index} className='flex items-center justify-start gap-2'>
                  <img src={checkImage} alt="Check_Image" />
                  <p className='md:w-fit w-60'>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='masked-container'>
            <h2 className='will-fade'>Sip-Worthy Perfection</h2>
            <div id='masked-content'>
              <h3>Made with Craft, Poured with Passion</h3>
              <p>The perfect blend of artistry and craftmanship, our cocktails are a symphony of flavors that transport you to a world of enchantment.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;