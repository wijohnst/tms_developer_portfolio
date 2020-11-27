import React from 'react'
import styled from 'styled-components'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

const ComponentWrapper = styled.div`
    max-width: 60ch;
    padding: .25rem;
`

export default function TextContent(props) {

    const { isDev, children } = props;

    const style = useDevStyle(isDev,"dashed","blue");

    return (
        <ComponentWrapper style={style}>
            {children}
        </ComponentWrapper>
    )
}
