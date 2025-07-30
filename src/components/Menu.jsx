import React, { useRef, useState } from 'react'
import sliderLeft from '../../public/images/slider-left-leaf.png'
import sliderRight from '../../public/images/slider-right-leaf.png'
import rightArrow from '../../public/images/right-arrow.png'
import leftArrow from '../../public/images/left-arrow.png'
import { sliderLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menu = () => {
    const contentRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCocktails = sliderLists.length;

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 })
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -200 }, { xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' })
        gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, { yPercent: 0, opacity: 100, ease: 'power1.inOut' })
        gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, { yPercent: 0, opacity: 100, ease: 'power1.inOut' })

        const parallaxTimeline = gsap.timeline({ scrollTrigger: { trigger: '#menu', start: 'top 20%', end: 'bottom bottom', scrub: true } });
        parallaxTimeline.from('#m-right-leaf', { x: 100, y: 100 });
        parallaxTimeline.from('#m-left-leaf', { x: -100, y: 100 });

    }, [currentIndex])

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    };

    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    };

    const currentCocktail = getCocktailAt(0);
    const nextCocktail = getCocktailAt(1);
    const prevCocktail = getCocktailAt(-1);

    return (
        <>
            <section id="menu" aria-labelledby='menu-heading' >
                <img id='m-left-leaf' src={sliderLeft} alt="Left_Leaf_Image" />
                <img id='m-right-leaf' src={sliderRight} alt="Right_Leaf_Image" />
                <h2 id='menu-heading' className='sr-only'>Cocktail Menu</h2>
                <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
                    {sliderLists.map((cocktail, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <button
                                key={cocktail.id}
                                className={`${isActive ? 'text-white border-white' : 'tet-white/50 border-white/50'}`}
                                onClick={() => goToSlide(index)}
                            >
                                {cocktail.name}
                            </button>
                        )
                    })}
                </nav>
                <div className='content'>
                    <div className="arrows">
                        <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                            <span>{prevCocktail.name}</span>
                            <img src={rightArrow} alt="Right_Arrow_Image" />
                        </button>
                        <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                            <img src={leftArrow} alt="Right_Arrow_Image" />
                            <span>{nextCocktail.name}</span>
                        </button>
                    </div>
                    <div className='cocktail'>
                        <img src={currentCocktail.image} className='oject-contain' alt="Cocktail_Image" />
                    </div>
                    <div className="recipe">
                        <div ref={contentRef} className='info' >
                            <p>Recipe For :</p>
                            <p id='title'>{currentCocktail.name}</p>
                        </div>
                        <div className='details'>
                            <h2 className='text-yellow' >{currentCocktail.title}</h2>
                            <p>{currentCocktail.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
