import React, { useRef, useContext } from 'react'
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

const ComponentWrapper = styled.section`
    height: 100%;
    min-height: 400px;
    display: flex;
`

export default function Home() {

    const parentRef = useRef(null);

    const { viewData } = useContext(ViewContext);

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper ref={parentRef}>
            <Content isDev={viewData.isDev}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <CircleImage 
                        source={will_wink} 
                        parent={parentRef}
                        sizeDivisor={(isMobile ? .25 : .5)}
                        alt={'Will winking.'}
                    />
                    <TextContent 
                        isDev={viewData.isDev}
                        contentSide={"left"}
                    >
                        <HeroText>
                            I'm Will and I make simple, scalable web applications.
                        </HeroText>
                    </TextContent>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                    <TextContent
                        isDev={viewData.isDev}
                        contentSide={"right"}
                    >
                        <HeroText>
                            These are some of my favorite tools.
                        </HeroText>
                    </TextContent>
                    <CircleImage 
                        source={tools}
                        parent={parentRef}
                        sizeDivisor={(isMobile ? .25 : .5)}
                        alt={'Toolbox.'}
                    />
                </div>
            </Content>
        </ComponentWrapper>
    )
}