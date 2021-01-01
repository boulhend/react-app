import React from 'react'

import {InfoContainer,InfoRow,InfoWrapper,TextWrpper,Column1,Column2,Heading,TopLine,Subtitle,BtnWrap,ImgWrap,Img} from './InfoElements'
import {Button} from '../ButtonElements'
const InfoSection = ({id,
lightBg,
lightText,
lightTextDesc,
topLine,
headLine,
description,
buttonLbel,
imgStart,
img,
alt,
dark,
primary,
darkText}) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrpper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    to='home'
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    exact="true"
                                    offset={-80}
                                    primary={primary}
                                    dark={dark}
                                    >
                                        {buttonLbel}
                                    </Button> 
                                </BtnWrap>
                            </TextWrpper>

                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
