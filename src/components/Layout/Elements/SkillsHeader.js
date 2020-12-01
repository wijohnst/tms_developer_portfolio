import React  from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.section`
    display: flex;
`
const First = styled.section`
    /* background-color: lightpink; */
    display: flex;
    width: 50%;
`
const Second = styled.section`
    display: flex;
    /* background-color: lightblue; */
`

export default function SkillsHeader(props) {

    const { 
            firstLabel, 
            secondLabel,
            widthRef
         } = props;

    return (
        <ComponentWrapper>
           <First>
               {firstLabel}
           </First>
           <Second>
               {secondLabel}
           </Second>
        </ComponentWrapper>
    )
}
