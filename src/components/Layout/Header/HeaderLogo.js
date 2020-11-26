import React from 'react'
import styled from 'styled-components'

import useMedia from "../../../Utilities/Hooks/useMedia"
import getDevice from "../../../Utilities/getDevice"

const ComponentWrapper = styled.section`

    border: dashed blue;
    padding: .25rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    border: dashed gray;
    padding: .25rem;
    margin: .15rem;
`
const LogoText = styled.div`
    border: dashed orange;
    height: 100px;
    display: ${({display}) => display};
    justify-content: center;
    align-items: center;
    padding: .25rem;
    margin: .15rem;
`

export default function HeaderLogo() {

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )
    return (
        <ComponentWrapper>
            <Logo>
                Image : Height = 100px;
            </Logo>
            <LogoText display={isMobile ? "none" : "flex"}>
                Logo Text
            </LogoText>
        </ComponentWrapper>
    )
}
