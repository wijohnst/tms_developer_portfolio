import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useDevStyle from '../../Utilities/Hooks/useDevStyle'
import useMedia from '../../Utilities/Hooks/useMedia'

import getDevice from '../../Utilities/getDevice'
import getClipPath from '../../Utilities/getClipPath'

import { Boxes } from './Elements/Patterns'
import Header from './Header/Header'

const ComponentWrapper = styled.section``    
const Head = styled.section``
const ViewArea = styled.section`
    display: flex;
    flex-direction: column;
    
`
const DevButton = styled.button`
    z-index: 2000;
    margin-right: 1.25rem;
    margin-bottom: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    &:hover{
        cursor: pointer;
    }
`
export default function Layout(props) {

    const { viewData, setViewData } = useContext(ViewContext);

    function toggleIsDev(){
        setViewData({isDev : !viewData.isDev});
    }

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    const compStyle = useDevStyle(viewData.isDev, "dashed", 'red')
    const viewStyle = useDevStyle(viewData.isDev,"dotted thin","orange");
    
    return (
        <ComponentWrapper 
            style={(viewData.isDev ? {...compStyle, ...Boxes} : {})}
        >
        {/* <ComponentWrapper style={(viewData.isDev ? compStyle : null)}> */}
            <Head>
                <Header />
            </Head>
            <ViewArea 
                style={viewStyle}
            >
                {/* ViewController */}
                {props.children} 
            </ViewArea>
            <DevButton onClick={() => toggleIsDev()}>DEV MODE</DevButton>
        </ComponentWrapper>
    ) 
}
