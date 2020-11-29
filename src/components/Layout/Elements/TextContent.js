import React from 'react'
import styled from 'styled-components'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

const ComponentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function TextContent(props) {

    const { 
            isDev, 
            children, 
            contentSide
          } = props;

    const compStyle = useDevStyle(isDev,"dotted thin","blue");

    const highlightStyle = () => {
        switch (contentSide) {
            case "left":
                return {
                    borderLeft : "solid thin white",
                    marginLeft : ".5rem"
                }
            case "right":
                return {
                    borderRight : "solid thin white",
                    marginRight : ".5rem"
                }
            default:
                break;
        }
    }
    

    return (
        <ComponentWrapper style={(isDev ? compStyle : highlightStyle())}>
            {children}
        </ComponentWrapper>
    )
}
