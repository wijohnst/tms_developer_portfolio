import React  from 'react'
import styled from 'styled-components'

import useMedia from '../../../Utilities/Hooks/useMedia'

import getDevice from '../../../Utilities/getDevice'

const ComponentWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    width: ${({width}) => width};
    margin: 1rem;
    border-bottom: solid thin white;
`
const First = styled.section`
    /* background-color: lightpink; */
    display: flex;
    flex-grow: 1;
`
const Second = styled.section`
    display: flex;
    /* background-color: lightblue; */
`

const HeaderText = styled.span`
    font-size: 1.25rem;
    font-weight: 500;
`

export default function SkillsHeader(props) {

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    const { 
            firstLabel, 
            secondLabel,
            widthRef
         } = props;

    return (
        <ComponentWrapper
            width={(isMobile ? '75%' : '35%')}
        >
           <First>
               <HeaderText>{firstLabel}</HeaderText>
           </First>
           <Second>
               <HeaderText>{secondLabel}</HeaderText>
           </Second>
        </ComponentWrapper>
    )
}
