import React, { useContext }from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useIsDev from '../../../Utilities/Hooks/useDevStyle'
import TextContent from '../../Layout/Elements/TextContent'
import HeroText from '../../Layout/Elements/HeroText'

const ComponentWrapper = styled.section`
    margin: 1rem;
`
export default function ReactDetail() {

    const { viewData } = useContext(ViewContext)

    const compStyle = useIsDev(viewData.isDev,"dotted thin", "green");

    return (
        <ComponentWrapper style={compStyle}>
            <HeroText>
                React
            </HeroText>
        </ComponentWrapper>
    )
}
