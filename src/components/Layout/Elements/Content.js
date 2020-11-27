// This component should be used to display content within a view. 

import React from 'react'
import styled from 'styled-components'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

const ComponentWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: .5rem;
    /* display: flex; */
`

export default function Content(props) {

    const { 
            children, 
            isDev,
            flexDir
        } = props;

    const style = useDevStyle(isDev,"dotted thin","red");

    return (
        <ComponentWrapper style={style} flexDirection={flexDir}>
            {children}
        </ComponentWrapper>
    )
}
