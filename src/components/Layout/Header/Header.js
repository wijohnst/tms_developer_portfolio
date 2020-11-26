import React from 'react'
import styled from 'styled-components'

import useMedia from '../../../Utilities/Hooks/useMedia'
import getDevice from '../../../Utilities/getDevice'

import HeaderLogo from './HeaderLogo'
import HeaderText from './HeaderText'
import Nav from './Nav'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection}; 
`

export default function Header() {
    
    const flexDir = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        ['row','row','column'],
        'row'
        );

    return (
        <ComponentWrapper flexDirection={flexDir}>
            <HeaderLogo />
            <HeaderText />
            <Nav />
        </ComponentWrapper>
    )
}
