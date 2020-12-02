import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useDevStyle from '../../Utilities/Hooks/useDevStyle'
import useMedia from '../../Utilities/Hooks/useMedia'

import getDevice from '../../Utilities/getDevice'

import { Boxes } from './Elements/Patterns'
import Header from './Header/Header'

const ComponentWrapper = styled.section``
const Head = styled.section``
const ViewArea = styled.section`
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    overflow: scroll;
`
const DevButton = styled.button`
    max-width: fit-content;
    margin-top: 1rem;
    z-index: 1000;
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

    const compStyle = useDevStyle(viewData.isDev, "dashed", 'green')
    const viewStyle = useDevStyle(viewData.isDev,"dotted thin","orange");
    
    return (
        <ComponentWrapper style={(viewData.isDev ? {...compStyle, ...Boxes} : {})}>
            <Head>
                <Header />
            </Head>
            <ViewArea 
                style={viewStyle}
            >
                {/* ViewController */}
                {props.children} 
            </ViewArea>
            <DevButton onClick={() => toggleIsDev()}>Toggle Dev Mode</DevButton>
        </ComponentWrapper>
    ) 
}
