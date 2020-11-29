// This component should be used to display content within a view. 
import React from 'react'
import styled from 'styled-components'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'
import useMedia from '../../../Utilities/Hooks/useMedia'

import getDevice from '../../../Utilities/getDevice'

const ComponentWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: .75rem;
    margin-right: ${({marginRight}) => marginRight};
`

export default function Content(props) {

    const { 
            children, 
            isDev,
            flexDir
        } = props;

    const style = useDevStyle(isDev,"dotted thin","red");

    const isBrowser = useMedia(
        [getDevice('browser'),getDevice('table'),getDevice('mobile')],
        [true,false,true],
        false
    )

    return (
        <ComponentWrapper 
            style={style} 
            flexDirection={flexDir}
            marginRight={(isBrowser ? "3rem" : "1rem")}
        >
            {children}
        </ComponentWrapper>
    )
}
