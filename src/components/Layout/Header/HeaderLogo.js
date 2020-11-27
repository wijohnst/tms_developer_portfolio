import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

import useMedia from "../../../Utilities/Hooks/useMedia"
import getDevice from "../../../Utilities/getDevice"

import Logo from './Logo.svg'

const ComponentWrapper = styled.section`
    padding: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoWrapper = styled.div`
    height: 100px;
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: .25rem;
    margin: .5rem;
`
const LogoText = styled.div`
    height: 100px;
    display: ${({display}) => display};
    justify-content: center;
    align-items: center;
    padding: .25rem;
    margin: .5rem;
    font-size: 1.5rem;
    font-weight: 700;
`

export default function HeaderLogo() {

    const { viewData } = useContext(ViewContext);

    const styleComponent = useDevStyle(viewData.isDev,"dashed","blue");
    const styleImage = useDevStyle(viewData.isDev,"dotted thin","grey");
    const styleText = useDevStyle(viewData.isDev,"dotted thin","orange");

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )
    return (
        <ComponentWrapper style={styleComponent}>
            <LogoWrapper style={styleImage}>
                <img src={Logo} />
            </LogoWrapper>
            <LogoText style={styleText} display={isMobile ? "none" : "flex"}>
               willjohnston.tech 
            </LogoText>
        </ComponentWrapper>
    )
}
