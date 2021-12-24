import { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import anime from 'animejs'
import gsap from 'gsap/all'

const About = () => {

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
            smoothMobile: true,
            inertia: 0.75,
        })

        gsap.from(".cursor-follow", 2,{
            delay: 1,
            opacity: 0,
        })

        let follower = document.querySelector(".cursor-follow")

        let posX = 0
        let posY = 0
        let mouseX = 0
        let mouseY = 0

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;

                gsap.set(follower, {
                    css: {
                        left: posX - 40,
                        top: posY - 40,
                    }
                });
            }
        });

        document.addEventListener("mousemove", function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        })

    }, [])

    return (
        <div className="wrapper">
            <Navbar />

            <div className="about__container" data-scroll-section>
                <p className="about__container-data" data-scroll>Hi! My name is <span>Kurt Davenport</span> and I'm a digital
                designer, born in <span>Malmo,</span> Sweden.</p>

                <p data-scroll>If you have any questions or would like to have a chat, don't hesitate to <span className="about__container-contact-link"><Link to="/">get in touch.</Link></span></p>

                <p className="about__container-link" data-scroll>
                    <Link to="/">Winner of Webdesign Honorable mention and <br/> design excellence</Link>.
                </p>
            </div>

            <div className="cursor-follow"></div>
        </div>
    )
}

export default About
