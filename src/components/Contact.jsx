import React from 'react'
import footerRightImage from '../../public/images/footer-right-leaf.png'
import footerLeftImage from '../../public/images/footer-left-leaf.png'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });
        const timeline = gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top center' }, ease: 'power1.inOut' });
        timeline.from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.02 }).from('#contact h3, #contact p', { opacity: 0, yPercent: 100, stagger: 0.02 });

        const parallaxTimeline = gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top 20%', end: 'bottom 90%', scrub: true } });
        parallaxTimeline.from('#f-right-leaf', { x: 100, y: -110 });
        parallaxTimeline.from('#f-left-leaf', { x: -90, y: 100 });
    }, [])

    return (
        <>
            <footer id="contact">
                <img src={footerRightImage} alt="Footer_Right_Leaf" id="f-right-leaf" />
                <img src={footerLeftImage} alt="Footer_Left_Leaf" id="f-left-leaf" />
                <div className="content">
                    <h2>Where to Find Us</h2>
                    <div>
                        <h3>Visit Our Bar</h3>
                        <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <p>9638473047</p>
                        <p>chhipasahil163@gmail.com</p>
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
                                <a key={social.name} target='_blank' rel="noreferrer noopener" aria-label={social.name} href={social.url}>
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Contact
