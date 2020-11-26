import React from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.section`
    border: dashed green;
    flex-grow: 1;
    padding: .25rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Nav() {
    return (
        <ComponentWrapper>
            Nav Text
        </ComponentWrapper>
    )
}
