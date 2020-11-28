import React, { useRef, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useMedia from '../../Utilities/Hooks/useMedia'
import getDevice from '../../Utilities/getDevice'

import will_wink from './will_wink.png'
import tools from './tools.png'
import CircleImage from '../Layout/Elements/CircleImage'
import Content from '../Layout/Elements/Content'
import TextContent from '../Layout/Elements/TextContent'
import HeroText from '../Layout/Elements/HeroText'
import Tools from './Tools'

const ComponentWrapper = styled.section`
    height: 100%;
    min-height: 400px;
    display: flex;
`
const BioWrapper = styled.section``
const FavsWrapper = styled.section`
    display: flex;
    align-items: center;
`
const ToolsWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`

export default function Home() {

    const parentRef = useRef(null);

    const { viewData } = useContext(ViewContext);

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )
    const divisor = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [.5,.35,.25],
        .5
    )

    const browserPosition = {
        position: 'relative',
        bottom: '100pt'
    }

    return (
        <ComponentWrapper ref={parentRef}>
            <Content isDev={viewData.isDev}>
                <BioWrapper style={{display: "flex", alignItems: "center"}}>
                    <TextContent 
                        isDev={viewData.isDev}
                        contentSide={"left"}
                    >
                        <HeroText>
                            I'm Will and I make simple, scalable web applications.
                        </HeroText>
                    </TextContent>
                </BioWrapper>
                <FavsWrapper>
                    <TextContent
                        isDev={viewData.isDev}
                        contentSide={"left"}
                    >
                        <HeroText>
                            These are some of my favorite tools.
                        </HeroText>
                    </TextContent>
                </FavsWrapper>
                <ToolsWrapper style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                    <Tools />
                </ToolsWrapper>
            </Content>
        </ComponentWrapper>
    )
}
