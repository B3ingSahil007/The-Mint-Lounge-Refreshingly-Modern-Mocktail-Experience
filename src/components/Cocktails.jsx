import React from 'react'
import heroLeftLeaf from '../../public/images/cocktail-left-leaf.png'
import heroRightLeaf from '../../public/images/cocktail-right-leaf.png'
import { cocktailLists, mockTailLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({ scrollTrigger: { trigger: '#cocktails', start: 'top 30%', end: 'bottom 80%', scrub: true } });
        parallaxTimeline.from('#c-left-leaf', { x: -100, y: 100 });
        parallaxTimeline.from('#c-right-leaf', { x: 100, y: 100 });
    }, [])

    return (
        <>
            <section id='cocktails'>
                <img id='c-left-leaf' src={heroLeftLeaf} alt="Cocktail_Left_Leaf" />
                <img id='c-right-leaf' src={heroRightLeaf} alt="Cocktail_Left_Leaf" />
                <div className="list">
                    <div className="popular">
                        <h2>Most Popular Cocktails :</h2>
                        <ul>
                            {cocktailLists.map(({ name, country, detail, price }) => (
                                <li key={name}>
                                    <div className='md:me-28'>
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="loved">
                        <h2>Most Popular Mocktails :</h2>
                        <ul>
                            {mockTailLists.map(({ name, country, detail, price }) => (
                                <li key={name}>
                                    <div className='me-28'>
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cocktails
