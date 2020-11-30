import React, { useContext }from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useDevState from '../../../Utilities/Hooks/useDevStyle'

import ReactDetail from './ReactDetail'
import NodeDetail from './NodeDetail'
import FigmaDetail from './FigmaDetail'
import CodeDetail from './CodeDetail'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    /* opacity: ${({opacity}) => opacity}; */
    display: ${({display}) => display};
    border-top: ${({border}) => border};
    /* position: relative; */
    /* overflow: hidden; */
`

export default function ToolDetailRouter() {

    const { viewData } = useContext(ViewContext);

    const compStyle = useDevState(viewData.isDev,"dotted thin","white");

    const hasSelection = () => {
        if(viewData.toolsIsActive){
            return viewData.toolsIsActive.includes(true);
        }
    }

    const detailComponents = [ <ReactDetail />,<NodeDetail />,<FigmaDetail />,<CodeDetail />];

    const target = () => {
        if(viewData.toolsIsActive){
            return viewData.toolsIsActive.indexOf(true)
        }
    };

    return (
        <ComponentWrapper 
            style={compStyle}
            display={(hasSelection() ? "flex" : "hidden")}
            // opacity={(hasSelection() ? 100 : 0)}
            border={(!viewData.isDev && hasSelection() ? "solid thin white" : "none")}
        >
            {detailComponents[target()]}
        </ComponentWrapper>
    )
}
