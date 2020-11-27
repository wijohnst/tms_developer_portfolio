import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'
import useMedia from '../../../Utilities/Hooks/useMedia'
import getDevice from '../../../Utilities/getDevice'

const ComponentWrapper = styled.div`
    display: ${({display}) => display};
    justify-content: center;
    align-items: center;
    padding: .25rem;
`
const HeaderText = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
`

export default function MobileHeaderText() {

    const { viewData } = useContext(ViewContext);

    const compStyle = useDevStyle(viewData.isDev,"dashed","purple");

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper style={compStyle} display={(isMobile ? "flex" : "none")}>
            <HeaderText>
                willjohnston.tech 
            </HeaderText>   
        </ComponentWrapper>
    )
}
