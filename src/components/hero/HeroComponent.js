import React from 'react'
import './HeroComponent.css'

import BGVideo from '../../assets/video.mp4'

export default function HeroComponent() {
    return (
        <div className='hero-container'>
            <video className='bg-video' src={BGVideo} autoPlay loop muted />
            <div className='title-container'>
                <h4 className='hero-title'>Welcome to Booking Service</h4>
            </div>
        </div>
    )
}
