import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useDevStyle from '../../Utilities/Hooks/useDevStyle'

import { Boxes } from './Elements/Patterns'
import Header from './Header/Header'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: column;
`
const Head = styled.section``
const ViewArea = styled.section`
    flex-grow: 1;
    overflow: scroll;
    padding: .25rem;
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

    const viewStyle = useDevStyle(viewData.isDev,"dashed","orange");
    
    return (
        <ComponentWrapper style={(viewData.isDev ? Boxes : {})}>
            <Head>
                <Header />
            </Head>
            <ViewArea style={viewStyle}>
                {props.children}
            </ViewArea>
            <DevButton onClick={() => toggleIsDev()}>Toggle Dev Mode</DevButton>
        </ComponentWrapper>
    ) 
}
