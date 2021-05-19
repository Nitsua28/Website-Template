import React from 'react'
import {Button} from './Button';
import './HeroSection.css'
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Hero Header</h1>
            <p>Hero paragraph</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Button
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Button2
                    {/* <i className='far fa-play-circle' /> */}
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
