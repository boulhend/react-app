import React, { useState } from 'react'

import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroButtonWrapper,HeroP,ArrowForward,ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements'
const Hero = () => {
    const [hover,setHover] = useState(false)
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type ='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    <span style={{color:'#377dff'}}>Automatically</span> Create Dynamic Product Ads<span className='blinker'></span>
                </HeroH1>
                <HeroP>
                    Sign up now for a fry account and receiv 50$ credits toward your next payments
                </HeroP>
                <HeroButtonWrapper>
                    <Button primary='true' to='signup' onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)}>
                        Get started { hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
