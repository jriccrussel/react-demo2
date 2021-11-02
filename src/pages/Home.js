import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import HorizontalScroll from 'horizontal-scroll/src/index'

const data = [
    {name: "Asterisks"},
    {name: "Unlocked"},
    {name: "Offbeat"},
    {name: "Brutal"},
    {name: "Mouthwash"},
]


const Home = () => {
    useEffect(() => {
        var blocks = document.getElementsByClassName("container__item")
        var container = document.getElementsByClassName("container")
        var hs = new HorizontalScroll({
            blocks: blocks,
            container: container,
            isAnimated: true,
            springEffect: 0.8,
        })
    }, [])

    return (
        <div className="wrapper">
            <Navbar />

            <div className="container">
                <div className="container__item container__item-header">
                    <h1>Kurt Davenport, <br /> Graphic Design</h1>
                </div>

                {data.map((item, index) => {
                    const {name} = item

                    return (
                        <div className={`container__item container__item-${index + 1}`}>
                            <h1 className="container__item-title">
                                <Link to="/projects">{name}</Link>
                            </h1>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Home
