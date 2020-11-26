import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../Store/ViewContext'

const ComponentWrapper = styled.section`
    padding: .25rem;
`

export default function Start() {

    const { setViewData } = useContext(ViewContext);
    return (
        <ComponentWrapper>
            Start Component
            <button onClick={() => setViewData({view : "Next"})}>Click</button>
        </ComponentWrapper>
    )
}
