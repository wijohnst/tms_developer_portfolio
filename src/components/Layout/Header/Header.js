import React from 'react'
import styled from 'styled-components'

import useMedia from '../../../Utilities/Hooks/useMedia'
import getDevice from '../../../Utilities/getDevice'

import HeaderLogo from './HeaderLogo'
import MobileHeaderText from './MobileHeaderText'
import Nav from './Nav'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection};
    border: solid thin white;
`

export default function Header() {
    
    const flexDir = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        ['row','row','column'],
        'row'
        );

    return (
        <ComponentWrapper 
            flexDirection={flexDir}
        >
            <HeaderLogo />
            <MobileHeaderText /> {/* Mobile header is only visible on mobile */}
            <Nav />
        </ComponentWrapper>
    )
}
