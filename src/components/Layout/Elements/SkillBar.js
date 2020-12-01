import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'
import useDevStyle from '../../../Utilities/Hooks/useDevStyle'
import useMedia from '../../../Utilities/Hooks/useMedia'

import getDevice from '../../../Utilities/getDevice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ComponentWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    width: ${({width}) => width};
    margin: 1rem;
`
const SkillName = styled.section`
    display: flex;
    /* background-color: lightgreen; */
    flex-grow: 1;
`
const SkillLevel = styled.section`
    display: flex;
    /* background-color: lightpink; */
`

export default function SkillBar(props) {

    const { viewData } = useContext(ViewContext);

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    const { 
        skillName,
        skillLevel,
        } = props;

    const compStyle = useDevStyle(viewData.isDev,"dotted thin", "#ff6ec7");

    

    return (
        <ComponentWrapper 
            style={compStyle}
            width={(isMobile ? "75%" : "35%")}
        >
            <SkillName>{skillName}</SkillName>
            <SkillLevel>
                {skillLevel.map((isLevel,index) => {
                    return <FontAwesomeIcon 
                            icon={faStar} 
                            color={(isLevel ? "white" : "#707070" )}
                            key={`SkillBar-${index}`} 
                           />
                })}
            </SkillLevel>
        </ComponentWrapper>
    )
}
