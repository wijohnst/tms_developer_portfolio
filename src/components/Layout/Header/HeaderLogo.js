import React, { useContext, useRef } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

import useMedia from "../../../Utilities/Hooks/useMedia"
import getDevice from "../../../Utilities/getDevice"

import CircleImage from '../Elements/CircleImage'

import will_wink from '../../Home/will_wink.png'

const ComponentWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoWrapper = styled.div`
    height: 9rem;
    min-width: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin: .75rem;
    margin-right: 1rem;
`
const LogoText = styled.div` 
    display: ${({display}) => display};
    justify-content: center;
    align-items: center;
    width: 15.75rem;
    margin-right: 1rem;
    font-size: 2rem;
    font-weight: 700;
`

export default function HeaderLogo() {

    const { viewData } = useContext(ViewContext);

    const styleComponent = useDevStyle(viewData.isDev,"dashed","blue");
    const styleImage = useDevStyle(viewData.isDev,"dotted thin","red");
    const styleText = useDevStyle(viewData.isDev,"dotted thin","red");

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    const parentRef = useRef(null);

    return (
        <ComponentWrapper style={styleComponent}>
            <LogoWrapper style={styleImage} ref={parentRef}>
                <CircleImage
                    source={will_wink} 
                    parent={parentRef}
                    sizeDivisor={1}
                    alt={'Will winking.'}
                    backgroundColor={'white'}
                    isDev={viewData.isDev}
                />
            </LogoWrapper>
            <LogoText style={styleText} display={isMobile ? "none" : "flex"}>
               willjohnston.tech 
            </LogoText>
        </ComponentWrapper>
    )
}
