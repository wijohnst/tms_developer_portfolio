import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

import useDevStyle from '../../Utilities/Hooks/useDevStyle'
const ComponentWrapper = styled.section`
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Tools() {

    const { viewData } = useContext(ViewContext);

    const compStyle = useDevStyle(viewData.isDev,"dotted thin", "blue");
    return (
        <ComponentWrapper style={compStyle}>
            {/* Tools */}
        </ComponentWrapper>
    )
}
