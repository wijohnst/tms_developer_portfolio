import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import getClipPath  from '../../../Utilities/getClipPath'

const ComponentWrapper = styled.section``

const Circle = styled.div`
    clip-path: ${({clipPath}) => clipPath}; 
    max-width: ${({maxWidth}) => maxWidth};
    background-color: ${({backgroundColor})=> backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({border}) => border};
`
export default function CircleImage(props) {

    const { 
        source, 
        parent,
        sizeDivisor,
        alt,
        backgroundColor,
        isDev
     } = props;

    const [imgHeight, setImageHeight] = useState('0px');

    useEffect(() =>{
        if(parent && parent.current.getBoundingClientRect().height >= 100 && parent.current.getBoundingClientRect().width >= 200){
            setImageHeight(parent.current.getBoundingClientRect().height * sizeDivisor);            
        }else{
            console.log("ERROR: Parent is too small to display <CircleImage />.")
        }
    },[parent,sizeDivisor])
    
    return (
        <ComponentWrapper>
            <Circle 
                maxWidth={`${imgHeight}px`}
                backgroundColor={(isDev ? "none" : backgroundColor || 'white')}
                clipPath={(isDev ? "none" : getClipPath('circle'))}
                border={(isDev ? "dotted thin green" : "none")}
            >
                <img 
                    src={source} 
                    height={imgHeight}
                    alt={alt} 
                />
            </Circle>
        </ComponentWrapper>
    )
}
