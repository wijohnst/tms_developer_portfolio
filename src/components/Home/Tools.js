import React, { useContext, useRef } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useDevStyle from '../../Utilities/Hooks/useDevStyle'
import useMedia from '../../Utilities/Hooks/useMedia'

import getDevice from '../../Utilities/getDevice'

import CircleImage from '../Layout/Elements/CircleImage'

import react_logo from './Tools/react_logo.png'
import node_logo from './Tools/node_logo.png'
import figma_logo from './Tools/figma_logo.png'
import vs_logo from './Tools/vs_logo.png'

const ComponentWrapper = styled.section`
    min-height: ${({minHeight}) => minHeight};
    width: 100%;  
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
`
const ImgWrapper = styled.section``

export default function Tools() {

    const { viewData } = useContext(ViewContext);

    const compStyle = useDevStyle(viewData.isDev,"dotted thin", "blue");
    const parentRef = useRef(null);

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper 
            style={compStyle} 
            ref={parentRef}
            minHeight={(isMobile ? '200px' : '300px')}
        >   
            <ImgWrapper>
                <CircleImage
                    source={react_logo}
                    parent={parentRef}
                    sizeDivisor={(isMobile ? .25 : .5)}
                    alt={'React Logo.'}
                    backgroundColor={'black'}
                />
            </ImgWrapper>
            <ImgWrapper>
                <CircleImage 
                    source={node_logo}
                    parent={parentRef}
                    sizeDivisor={(isMobile ? .25 : .5)}
                    alt={'Node Logo.'}
                    backgroundColor={'black'}
                />
            </ImgWrapper>
            <ImgWrapper>
                <CircleImage
                    source={figma_logo}
                    parent={parentRef}
                    sizeDivisor={(isMobile ? .25 : .5)}
                    alt={'Figma Logo.'}
                    backgroundColor={'black'}
                />
            </ImgWrapper>
            <ImgWrapper>
                <CircleImage 
                    source={vs_logo}
                    parent={parentRef}
                    sizeDivisor={(isMobile ? .25 : .5)}
                    alt={'Visual Studio Code Logo.'}
                    backgroundColor={'black'}
                />
            </ImgWrapper>   
        </ComponentWrapper>
    )
}
