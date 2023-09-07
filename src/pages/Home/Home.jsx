import './home.css'
import Title from '../../components/title/Title'
import Presentation from '../../components/presentation/Presentation'
import React, { useState, useEffect, useRef } from 'react';


const Home = () => {
    const [currentElementIndex, setCurrentElementIndex] = useState(0);
    const homeContainerRef = useRef(null);

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
            homeContainerRef.current.removeEventListener('scroll', handleScroll);
        }
        };
    }, [currentElementIndex]);

    return(
        <div className="homeContainer" ref={homeContainerRef}>
            <div className="position">
                <div className="barre"></div>
                <div className="barreVide">
                    <div className={`step ${currentElementIndex === 0 ? 'active' : ''}`}></div>
                    <div className={`step ${currentElementIndex === 1 ? 'active' : ''}`}></div>
                    <div className={`step ${currentElementIndex === 2 ? 'active' : ''}`}></div>
                    <div className={`step ${currentElementIndex === 3 ? 'active' : ''}`}></div>
                    <div className={`step ${currentElementIndex === 4 ? 'active' : ''}`}></div>
                </div> 
            </div>
            <section className={`title ${currentElementIndex === 0 ? 'active' : 'inactive'}`}>
                <Title/>
            </section>
            <section className={`title ${currentElementIndex === 1 ? 'active' : 'inactive'}`}>
                <Presentation/>
            </section>
            <section className={`title ${currentElementIndex === 2 ? 'active' : 'inactive'}`}>
                <Presentation/>
            </section>
            <section className={`title ${currentElementIndex === 3 ? 'active' : 'inactive'}`}>
                <Presentation/>
            </section>
            <section className={`title ${currentElementIndex === 4 ? 'active' : 'inactive'}`}>
                <Presentation/>
            </section>
        </div>
    )
}

export default Home