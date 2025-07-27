import React from 'react'
import { navLinks } from '../../constants'
import mainLogo from '../assets/images/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            },
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent', }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        });
    });

    return (
        <>
            <nav className='backdrop-blur'>
                <div>
                    <a className='flex items-center gap-2'>
                        <img src={mainLogo} alt="logo" />
                        <p>The Mint Lounge</p>
                    </a>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
