import React from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export default function ComponentGallery() {
    return (
        <ComponentWrapper>
            Component Gallery
        </ComponentWrapper>
    )
}
