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
export default function NodeDetail() {

    const { viewData } = useContext(ViewContext)
    const compStyle = useIsDev(viewData.isDev,"dotted thin", "orange");

    return (
        <ComponentWrapper 
            style={compStyle}
        >
            <SkillMarquee text={'Node.js'} />
            <SkillsHeader
                firstLabel={'Skill'}
                secondLabel={'Level'}
            />
            <SkillBar
                skillName={'Express.js'}
                skillLevel={[true,true,true,false,false]}
            />
            <SkillBar
                skillName={'Okta'}
                skillLevel={[true,true,false,false,false]}
            />
            <SkillBar
                skillName={'MongoDB'}
                skillLevel={[true,true,true,false,false]}
            />
            <SkillBar
                skillName={'MySQL'}
                skillLevel={[true,true,true,true,false]}
            />
            <SkillBar
                skillName={'AWS Lambda'}
                skillLevel={[true,true,false,false,false]}
            />
            <SkillBar
                skillName={'AWS Elastic Beanstalk'}
                skillLevel={[true,true,true,false,false]}
            />
        </ComponentWrapper>
     )
    }
        
