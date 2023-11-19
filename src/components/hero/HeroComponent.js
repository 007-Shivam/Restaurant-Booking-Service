import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import './HeroComponent.css'

import BGVideo from '../../assets/video.mp4'

export default function HeroComponent() {
    return (
        <div className='hero-container'>
            <video className='bg-video' src={BGVideo} autoPlay loop muted />
            <div className='title-container'>
                <h4 className='hero-title'>Welcome to Restaurant Booking Service</h4>
                <p className="tagline">
                    <Typewriter
                        words={[
                            "Reserve, Indulge, Savor.",
                            "Book. Dine. Delight.",
                            "Feast. Reserve. Indulge.",
                            "Savor. Reserve. Celebrate.",
                        ]}
                        cursor
                        cursorStyle="_"
                        loop={0}
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={2000}
                    />
                </p>
            </div>
        </div>
    )
}
