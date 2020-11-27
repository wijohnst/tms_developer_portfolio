import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'
import useDevStyle from '../../../Utilities/Hooks/useDevStyle'
import useMedia from '../../../Utilities/Hooks/useMedia'
import getDevice from '../../../Utilities/getDevice'

const ComponentWrapper = styled.section`
    font-size: ${({fontSize}) => fontSize};
    margin: .5rem;
`

export default function HeroText(props) {

    let { children } = props;

    const { viewData } = useContext(ViewContext)

    const compStyle = useDevStyle(viewData.isDev,"dotted thin", "coral");
    const fontSize = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        ["2rem","1.75rem","1rem"],
        "2rem"
    )

    return (
        <ComponentWrapper 
            style={compStyle}
            fontSize={fontSize}
        >
            {children}
        </ComponentWrapper>
    )
}
