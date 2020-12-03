import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useDevStyle from '../../Utilities/Hooks/useDevStyle'
import useMedia from '../../Utilities/Hooks/useMedia'
import useIsActive from '../../Utilities/Hooks/useIsActive' //Custom hook for storing/updating state for an array of elements

import getDevice from '../../Utilities/getDevice'

import CircleImage from '../Layout/Elements/CircleImage'
import ToolDetailRouter from './Tools/ToolDetailRouter'

import react_logo from './Tools/react_logo.png'
import node_logo from './Tools/node_logo.png'
import figma_logo from './Tools/figma_logo.png'
import vs_logo from './Tools/vs_logo.png'

const ComponentWrapper = styled.section`
    min-height: ${({minHeight}) => minHeight};
    width: 100%;  
`
const ToolBar = styled.section`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: ${({backgroundColor}) => backgroundColor};
    margin-bottom: .5rem;
    /* border: dotted lightpink; */
`
const ImgWrapper = styled.div`
    /* &:after{
        content: "|";
        color:  ${({color}) => color};
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-right: .25rem;
        bottom: 1rem;
        font-weight: ${({fontWeight}) => fontWeight};
        font-size: ${({fontSize}) => fontSize};
    }
    &:hover{
        cursor: pointer;
    } */
`
const ToolDetail = styled.section`
    position: relative;
    bottom: ${({bottom}) => bottom};
    margin-left: ${({marginLeft}) => marginLeft};
`

export default function Tools() {

    const { viewData, setViewData } = useContext(ViewContext);
    const [ activeArr, updateActive ] = useIsActive([true,false,false,false]); //State for ToolBar

    // const compStyle = useDevStyle(viewData.isDev,"dotted thin", "blue");
    const toolBarStyle = useDevStyle(viewData.isDev, "dotted thin", "coral");
    // const toolDetailStyle = useDevStyle(viewData.isDev, "dotted thin", "purple");
    const parentRef = useRef(null); //Used to calculate Tool icon size in <CircleImage />

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    useEffect(() =>{
        if(activeArr){
            setViewData({toolsIsActive  : activeArr}); //Sends active tool array to ViewContext
        }
    },[activeArr,setViewData])

    return (
        <ComponentWrapper 
            ref={parentRef}
            minHeight={(isMobile ? '175pt' : '200pt')}
            backgroundColor={(viewData.isDev ? "none" : "black")}
        >   
            <ToolBar>
                <ImgWrapper 
                    onClick={() => updateActive(0)} role={'button'}
                    color={(activeArr[0] ? "white" : "black")}
                    fontSize={(isMobile ? '1.75rem' : '3rem')}
                    fontWeight={(isMobile ? 500 : 300)}    
                >
                    <CircleImage
                        source={react_logo}
                        parent={parentRef}
                        sizeDivisor={(isMobile ? .25 : .5)}
                        alt={'React Logo.'}
                        backgroundColor={activeArr[0] ? "white" : "black"}
                        isDev={viewData.isDev}
                    />
                </ImgWrapper>
                <ImgWrapper 
                    onClick={() => updateActive(1)} role={'button'}
                    color={(activeArr[1] ? "white" : "black")}
                    fontSize={(isMobile ? '1.75rem' : '3rem')}
                    fontWeight={(isMobile ? 500 : 300)}
                >
                    <CircleImage 
                        source={node_logo}
                        parent={parentRef}
                        sizeDivisor={(isMobile ? .25 : .5)}
                        alt={'Node Logo.'}
                        backgroundColor={activeArr[1] ? "white" : "black"}
                        isDev={viewData.isDev}
                    />
                </ImgWrapper>
                <ImgWrapper 
                    onClick={() => updateActive(2)} role={'button'}
                    color={(activeArr[2] ? "white" : "black")}
                    fontSize={(isMobile ? '1.75rem' : '3rem')}
                    fontWeight={(isMobile ? 500 : 300)}
                >
                    <CircleImage
                        source={figma_logo}
                        parent={parentRef}
                        sizeDivisor={(isMobile ? .25 : .5)}
                        alt={'Figma Logo.'}
                        backgroundColor={activeArr[2] ? "white" : "black"}
                        isDev={viewData.isDev}
                    />
                </ImgWrapper>
                <ImgWrapper 
                    onClick={() => updateActive(3)} role={'button'}
                    color={(activeArr[3] ? "white" : "black")}
                    fontSize={(isMobile ? '1.75rem' : '3rem')}
                    fontWeight={(isMobile ? 500 : 300)}
                >
                    <CircleImage 
                        source={vs_logo}
                        parent={parentRef}
                        sizeDivisor={(isMobile ? .25 : .5)}
                        alt={'Visual Studio Code Logo.'}
                        backgroundColor={activeArr[3] ? "white" : "black"}
                        isDev={viewData.isDev}
                    />
                </ImgWrapper>
            </ToolBar>
            <ToolDetail 
                bottom={(isMobile ? "0rem" : "0rem")}
            >
                <ToolDetailRouter />
            </ToolDetail>   
        </ComponentWrapper>
    )
}
