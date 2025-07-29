import React, { useRef } from 'react'
import heroLeftLeaf from '../../public/images/hero-left-leaf.png'
import heroRightLeaf from '../../public/images/hero-right-leaf.png'
import glassVideo from '../../public/public/videos/output.mp4'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef()

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'words, chars' });
        const paraSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars, { yPercent: 100, duration: 1, ease: 'expo.out', stagger: 0.05 });
        gsap.from(paraSplit.lines, { yPercent: 100, duration: 1.8, ease: 'expo.out', stagger: 0.05, delay: 0.8, opacity: 0 });
        gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } }).to('.right-leaf', { y: 200 }, 0).to('.left-leaf', { y: -200 }, 0);

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';
        const tl = gsap.timeline({ scrollTrigger: { trigger: 'video', start: startValue, end: endValue, scrub: true, pin: true } });
        videoRef.current.onloadedmetadata = () => { tl.to(videoRef.current, { currentTime: videoRef.current.duration }) };

    }, [])

    return (
        <>
            <section id='hero'>
                <h1 className='title text-[10vw]'>The Mint Lounge</h1>
                <img src={heroLeftLeaf} className='left-leaf' alt="Hero_Left_Leaf" />
                <img src={heroRightLeaf} className='right-leaf' alt="Hero_Left_Leaf" />
                <div className='body'>
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className="text-lg uppercase tracking-widest text-yellow subtitle">Refreshing. Timeless. Iconic.</p>
                            <p className="subtitle">
                                Unwind with the Taste of Fresh Mint Lime
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">Discover handcrafted mojitos made to elevate your every moment.</p>
                            <a href="#cocktails" className='subtitle text-left transform duration-300 hover:scale-110'>View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='video absolute inset-0'>
                <video ref={videoRef} src={glassVideo} muted playsInline preload='auto' />
            </div>
        </>
    )
}

export default Hero
