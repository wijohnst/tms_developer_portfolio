import React, { useContext }from 'react'
import styled, { keyframes } from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useIsDev from '../../../Utilities/Hooks/useDevStyle'
import TextContent from '../../Layout/Elements/TextContent'
import HeroText from '../../Layout/Elements/HeroText'
import List from '../../Layout/Elements/List'

const ComponentWrapper = styled.section`
    margin: 1rem;
    display: flex;
    width: 100%;
    flex-direction: column;
`
export default function ReactDetail() {

    const { viewData } = useContext(ViewContext)

    const compStyle = useIsDev(viewData.isDev,"dotted thin", "orange");

    return (
        <ComponentWrapper style={compStyle}>
            <TextContent
                isDev={viewData.isDev}
            >
                <HeroText>
                    React.js
                </HeroText>
            </TextContent>
            <TextContent
                isDev={viewData.isDev}
            >
                <List
                    flexDirection={'row'}
                >
                    <li>ES6 Syntax</li>
                    <li>styled-components</li>
                    <li>Hooks</li>
                    <li>Context API</li>

                </List>
            </TextContent>
        </ComponentWrapper>
    )
}
