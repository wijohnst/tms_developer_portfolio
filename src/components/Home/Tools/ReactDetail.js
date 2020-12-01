import React, { useContext }from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import { ViewContext } from '../../../Store/ViewContext'

import useIsDev from '../../../Utilities/Hooks/useDevStyle'
import SkillsHeader from '../../Layout/Elements/SkillsHeader'
import SkillBar from '../../Layout/Elements/SkillBar'

const ComponentWrapper = styled(animated.section)`
    margin: 1rem;
    display: flex;
    width: 100%;
    flex-direction: column;
`

export default function ReactDetail() {

    const { viewData } = useContext(ViewContext)
    const compStyle = useIsDev(viewData.isDev,"dotted thin", "orange");

    return (
        <ComponentWrapper 
            style={compStyle}
        >
            <SkillsHeader 
                firstLabel={'Skill Name'}
                secondLabel={'Skill Level'}
            />
            <SkillBar 
                skillName={'Hooks'}
                skillLevel={[true,true,true,true,false]}
            />
            <SkillBar 
                skillName={'ES6'}
                skillLevel={[true,true,true,true,true]}
            />
        </ComponentWrapper>
     )
    }
        
