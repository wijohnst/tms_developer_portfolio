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
export default function ReactDetail() {

    const { viewData } = useContext(ViewContext)
    const compStyle = useIsDev(viewData.isDev,"dotted thin", "orange");

    return (
        <ComponentWrapper 
            style={compStyle}
        >
            <SkillMarquee text={'React.js'} />
            <SkillsHeader 
                firstLabel={'Skill'}
                secondLabel={'Level'}
            />
            <SkillBar 
                skillName={'Hooks'}
                skillLevel={[true,true,true,true,false]}
            />
            <SkillBar 
                skillName={'ES6'}
                skillLevel={[true,true,true,true,true]}
            />
            <SkillBar 
                skillName={'Styled Components / CSS-in-JS'}
                skillLevel={[true,true,true,true,true]}
            />
            <SkillBar 
                skillName={'Framer Motion'}
                skillLevel={[true,true,true,true,false]}
            />
            <SkillBar 
                skillName={'React Spring'}
                skillLevel={[true,true,true,false,false]}
            />
            <SkillBar
                skillName={'Context API'}
                skillLevel={[true,true,true,true,false]}
            />
        </ComponentWrapper>
     )
    }
        
