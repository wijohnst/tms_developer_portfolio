import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.section`
    /* background-color: lightpink; */
`
const Circle = styled.div`
    /* display: inline-flex; */
    clip-path: circle(50% at 50% 50%);
    max-width: ${({maxWidth}) => maxWidth};
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function CircleImage(props) {

    const { 
        source, 
        parent,
        sizeDivisor,
        alt
     } = props;

    const [imgHeight, setImageHeight] = useState('0px');

    useEffect(() =>{
        if(parent && parent.current.getBoundingClientRect().height >= 100 && parent.current.getBoundingClientRect().width >= 100){
            setImageHeight(parent.current.getBoundingClientRect().height * sizeDivisor);            
        }else{
            console.log("ERROR: Parent is too small to display <CircleImage />.")
        }
    },[parent])
    
    return (
        <ComponentWrapper>
            <Circle maxWidth={`${imgHeight}px`}>
                <img 
                    src={source} 
                    height={imgHeight}
                    alt={alt} 
                />
            </Circle>
        </ComponentWrapper>
    )
}
