import React, { useContext }from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import { ViewContext } from '../../../Store/ViewContext'

import useIsDev from '../../../Utilities/Hooks/useDevStyle'
import SkillsHeader from '../../Layout/Elements/SkillsHeader'
import SkillBar from '../../Layout/Elements/SkillBar'
import SkillMarquee from '../../Layout/Elements/SkillMarquee'

const ComponentWrapper = styled(animated.section)`
    margin: 1rem;
    display: flex;
    flex-direction: column;
`
export default function FigmaDetail() {

    const { viewData } = useContext(ViewContext)
    const compStyle = useIsDev(viewData.isDev,"dotted thin", "orange");

    return (
        <ComponentWrapper 
            style={compStyle}
        >
            <SkillMarquee text={'Figma'} />
            <SkillsHeader
                firstLabel={'Skill'}
                secondLabel={'Level'}
            />
            <SkillBar
                skillName={'Wireframes'}
                skillLevel={[true,true,true,true,true]}
            />
            <SkillBar
                skillName={'Feature Prototyping'}
                skillLevel={[true,true,true,true,true]}
            />
            <SkillBar
                skillName={'Components / Design Systems'}
                skillLevel={[true,true,true,true,false]}
            />
            <SkillBar
                skillName={'Interactions'}
                skillLevel={[true,true,true,true,true]}
            />
            <SkillBar
                skillName={'Atomic Design'}
                skillLevel={[true,true,true,false,false]}
            />
        </ComponentWrapper>
     )
    }
        
