import './home.css'
import Title from '../../components/title/Title'
import Presentation from '../../components/presentation/Presentation'
import React, { useState, useEffect, useRef } from 'react';
import Work from '../../components/work/Work';
import Forma from '../../components/formations/Forma';

const Home = () => {
    const [currentElementIndex, setCurrentElementIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const homeContainerRef = useRef(null);
    const positionRef = useRef(null);
    const page1 = useRef(null);
    const page2 = useRef(null);
    const page3 = useRef(null);
    const page4 = useRef(null);
    const page5 = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            
        if (homeContainerRef.current) {
            const container = homeContainerRef.current;
            const scrollY = container.scrollTop;
            const elementHeight = container.clientHeight;

            // Calculate the index of the currently displayed element
            const newIndex = Math.floor(scrollY / elementHeight);
            
            if (newIndex !== currentElementIndex) {
            setCurrentElementIndex(newIndex);
            }
        }
        };

        // Attach the scroll event listener to the homeContainer
        if (homeContainerRef.current) {
        homeContainerRef.current.addEventListener('scroll', handleScroll);
        }

        // Clean up the event listener when the component unmounts
        return () => {
        if (homeContainerRef.current) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            homeContainerRef.current.removeEventListener('scroll', handleScroll);
        }
        };
    }, [currentElementIndex]);

    useEffect(() => {
        const handleMouseEnter = () => {
            setIsHover(true);
        };

        const handleMouseLeave = () => {
            
                setIsHover(false);
            
        };

        if (positionRef.current) {
            positionRef.current.addEventListener('mouseenter', handleMouseEnter);
            positionRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (positionRef.current) {
                positionRef.current.removeEventListener('mouseenter', handleMouseEnter);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                positionRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    const handleNav = (myRef) => {
        myRef.current.scrollIntoView()
    }

    return(
        <div className="homeContainer" ref={homeContainerRef}>
            <div className={`position ${isHover ? 'hovered' : ''}`} ref={positionRef}>
                <div className="barre"></div>
                <div className="barreVide">
                    <div className={`step ${currentElementIndex === 0 ? 'active' : ''}`} onClick={() => handleNav(page1)}><p className={`stepMessage ${isHover ? 'isHover' : 'off'}`}>Acceuil</p></div>
                    <div className={`step ${currentElementIndex === 1 ? 'active' : ''}`} onClick={() => handleNav(page2)}><p className={`stepMessage ${isHover ? 'isHover' : 'off'}`}>Qui je suis ?</p></div>
                    <div className={`step ${currentElementIndex === 2 ? 'active' : ''}`} onClick={() => handleNav(page3)}><p className={`stepMessage ${isHover ? 'isHover' : 'off'}`}>Mon travail</p></div>
                    <div className={`step ${currentElementIndex === 3 ? 'active' : ''}`} onClick={() => handleNav(page4)}><p className={`stepMessage ${isHover ? 'isHover' : 'off'}`}>Mes formations</p></div>
                    <div className={`step ${currentElementIndex === 4 ? 'active' : ''}`} onClick={() => handleNav(page5)}><p className={`stepMessage ${isHover ? 'isHover' : 'off'}`}>Acceuil</p></div>
                </div> 
            </div>
            <section ref={page1} className={`title ${currentElementIndex === 0 ? 'active' : 'inactive'}`}>
                <Title/>
            </section>
            <section ref={page2} className={`title ${currentElementIndex === 1 ? 'active' : 'inactive'}`}>
                <Presentation/>
            </section>
            <section ref={page3} className={`title ${currentElementIndex === 2 ? 'active' : 'inactive'}`}>
                <Work/>
            </section>
            <section ref={page4} className={`title ${currentElementIndex === 3 ? 'active' : 'inactive'}`}>
                <Forma/>
            </section>
            <section ref={page5} className={`title ${currentElementIndex === 4 ? 'active' : 'inactive'}`}>
                <Presentation/>
            </section>
        </div>
    )
}

export default Home