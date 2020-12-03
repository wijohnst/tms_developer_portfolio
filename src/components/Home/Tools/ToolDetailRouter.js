import React, { useContext }from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import { ViewContext } from '../../../Store/ViewContext'

import useDevState from '../../../Utilities/Hooks/useDevStyle'

import ReactDetail from './ReactDetail'
import NodeDetail from './NodeDetail'
import FigmaDetail from './FigmaDetail'
import CodeDetail from './CodeDetail'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    border-top: ${({border}) => border};
    min-height: 8rem;
`
const ViewWrapper = styled(animated.section)`
    position: absolute;
    width: 100%;
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

    const transitions = useTransition(target(), (v) => v, {
        from: { opacity: 0, transform: "translate3d(0%,100%,0)" },
        enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
        leave: { opacity: 0, transform: "translate3d(-30%,0%,0)" }
      });

    return (
        <ComponentWrapper 
            display={(hasSelection() ? "flex" : "hidden")}
            border={(!viewData.isDev && hasSelection() ? "solid thin white" : "none")}
        >
            {(viewData.isDev ? detailComponents[target()] :
            transitions.map(({item, props, key}) =>{
                const View = detailComponents[item]
                return <ViewWrapper style={(viewData.isDev ? compStyle : props)} key={key} >{View}</ViewWrapper>
            }))}
        </ComponentWrapper>
    )
}
