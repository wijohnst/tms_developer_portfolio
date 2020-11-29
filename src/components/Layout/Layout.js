import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useDevStyle from '../../Utilities/Hooks/useDevStyle'
import useMedia from '../../Utilities/Hooks/useMedia'

import getDevice from '../../Utilities/getDevice'

import { Boxes } from './Elements/Patterns'
import Header from './Header/Header'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: column;
`
const Head = styled.section``
const ViewArea = styled.section`
    overflow: hidden;
    position: relative;
    bottom: .75rem;
    background-color: ${({backgroundColor}) => backgroundColor};
`
const DevButton = styled.button`
    max-width: fit-content;
    margin-top: 1rem;
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

    const viewStyle = useDevStyle(viewData.isDev,"dashed","orange",[false,true,true,true]);
    
    return (
        <ComponentWrapper style={(viewData.isDev ? Boxes : {})}>
            <Head>
                <Header />
            </Head>
            <ViewArea 
                style={viewStyle}
                
            >
                {props.children}
            </ViewArea>
            <DevButton onClick={() => toggleIsDev()}>Toggle Dev Mode</DevButton>
        </ComponentWrapper>
    ) 
}
