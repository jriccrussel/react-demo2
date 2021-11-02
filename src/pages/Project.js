import { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import anime from 'animejs'

const Project = () => {
    const subtitle = useRef(null)
    const img = useRef(null)

    useEffect(() => {
        // smooth scroll 
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#js-scroll'),
            smooth: true,
            smoothMobile: true,
            inertia: 0.75
        })
        
        // project title animation 
        var textWrapper = document.querySelector('.anime-js-title');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        anime.timeline().add({
            targets: ".anime-js-title .letter",
            translateY: [60, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 600 + 30 * i,
        })

        // project subtitle animation 
        gsap.from(".project__container-subtitle", 2, {
            y: 10,
            opacity: 0,
            ease: "power3.inOut",
        })

        // project image fade 
        gsap.from(".project__image-one", 2, {
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".project__image-two", 2, {
            delay: 1,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".project__image-three", 2, {
            delay: 1.5,
            opacity: 0,
            ease: "power3.inOut",
        })

        gsap.from(".project__image-four", 2, {
            delay: 1.8,
            opacity: 0,
            ease: "power3.inOut",
        })

    }, [])

    return (
        <div className="wrapper">
            <Navbar />

            <div className="project__container" data-scroll-section>
                <div className="project__container-title" data-scroll>
                    <h1 className="anime-js-title">Creative mix</h1>
                </div>

                <div className="project__container-subtitle" data-scroll>
                    <p>Visual Design</p>
                </div>

                <div className="project__container-images">
                    <div className="project__image project__image-one" data-scroll data-scroll-speed="1"></div>
                    <div className="project__image project__image-two" data-scroll data-scroll-speed="4"></div>
                    <div className="project__image project__image-three" data-scroll data-scroll-speed="2"></div>
                    <div className="project__image project__image-four" data-scroll data-scroll-speed="4"></div>
                </div>

                <div className="project-next-link" data-scroll>
                    <Link to="/projects">Next</Link>
                </div>

            </div>
            
        </div>
    )
}

export default Project
