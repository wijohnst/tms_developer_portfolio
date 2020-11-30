import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

const ComponentWrapper = styled.ul`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection};
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function List(props) {

    let { 
        children,
        flexDirection
     } = props;

    const { viewData } = useContext(ViewContext);

    const compStyle = useDevStyle(viewData.isDev,"dotted thin", "cyan")

    return (
        <ComponentWrapper 
            style={compStyle}
            flexDirection={flexDirection}
        >
            {children}
        </ComponentWrapper>
    )
}
