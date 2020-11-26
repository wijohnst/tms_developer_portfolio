import React from 'react'
import styled from 'styled-components'

import useMedia from '../../../Utilities/Hooks/useMedia'
import getDevice from '../../../Utilities/getDevice'

const ComponentWrapper = styled.div`
    border: dashed purple;
    display: ${({display}) => display};
    justify-content: center;
    align-items: center;
    padding: .25rem;
`

export default function HeaderText() {

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )

    return (
        <ComponentWrapper display={(isMobile ? "flex" : "none")}>
            Header Text
        </ComponentWrapper>
    )
}
