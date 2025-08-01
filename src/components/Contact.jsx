import React from 'react'
import footerRightImage from '../../public/images/footer-right-leaf.png'
import footerLeftImage from '../../public/images/footer-left-leaf.png'
import { openingHours, socials, storeInfo } from '../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });
        const timeline = gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top center' }, ease: 'power1.inOut' });
        timeline.from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.02 }).from('#contact h3, #contact p', { opacity: 0, yPercent: 100, stagger: 0.02 });

        const parallaxTimeline = gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top 10%', end: 'bottom bottom', scrub: 1 } });
        parallaxTimeline.from('#f-right-leaf', { x: 100, y: -110 });
        parallaxTimeline.from('#f-left-leaf', { x: -90, y: 100 });
    }, [])

    return (
        <>
            <footer id="contact">
                <img src={footerRightImage} alt="Footer_Right_Leaf" id="f-right-leaf" />
                <img src={footerLeftImage} alt="Footer_Left_Leaf" id="f-left-leaf" />
                <div className="content">
                    <h2>{storeInfo.heading}</h2>
                    <div>
                        <h3>Visit Our Bar</h3>
                        <p>{storeInfo.address}</p>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        {Object.entries(storeInfo.contact).map(([key, value]) => (
                            <p key={key}>{value}</p>
                        ))}
                    </div>
                    <div>
                        <h3>Open Hours</h3>
                        {openingHours.map((time) => (
                            <p key={time.day}>{time.day} : {time.time}</p>
                        ))}
                    </div>
                    <div>
                        <h3>Socials</h3>
                        <div className="flex-center gap-5">
                            {socials.map((social) => (
                                <a key={social.name} rel="noreferrer noopener" aria-label={social.name} href={social.url}>
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))}
                        </div>
                        <p className='text-base text-center mt-2'>{storeInfo.copyright}</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Contact
