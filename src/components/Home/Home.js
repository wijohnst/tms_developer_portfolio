import React, { useRef, useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

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
