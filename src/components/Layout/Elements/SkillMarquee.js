import React, { useContext }from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'
import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

const ComponentWrapper = styled.div``
const MarqueeText = styled.span`
    font-size: 2rem;
    font-weight: 300;
`
export default function SkillMarquee(props) {

    const { viewData } = useContext(ViewContext);
    const { text } = props;


    const compStyle = useDevStyle(viewData.isDev, "dotted thin", "green");

    return (
        <ComponentWrapper style={compStyle}>
            <MarqueeText>{text}</MarqueeText>
        </ComponentWrapper>
    )
}
