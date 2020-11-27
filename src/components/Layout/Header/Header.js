import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useMedia from '../../../Utilities/Hooks/useMedia'
import getDevice from '../../../Utilities/getDevice'

import HeaderLogo from './HeaderLogo'
import MobileHeaderText from './MobileHeaderText'
import Nav from './Nav'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection};
    background-color: ${({backgroundColor}) => backgroundColor}; 
`

export default function Header() {
    
    const { viewData } = useContext(ViewContext);

    const flexDir = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        ['row','row','column'],
        'row'
        );

    return (
        <ComponentWrapper 
            flexDirection={flexDir}
            backgroundColor={viewData.isDev ? "black" : "#808080"}
        >
            <HeaderLogo />
            <MobileHeaderText />
            <Nav />
        </ComponentWrapper>
    )
}
