import React from 'react'
import styled from 'styled-components'

import Header from './Header/Header'

const ComponentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
const Head = styled.section`
    background-color: lightpink;
`
const ViewArea = styled.section`
    background-color: lightblue;
    border: dashed orange;
    flex-grow: 1;
    margin-bottom:20px;
`


export default function Layout(props) {
    return (
        <ComponentWrapper>
            <Head>
                <Header />
            </Head>
            <ViewArea>
                {props.children}
            </ViewArea>
        </ComponentWrapper>
    ) 
}
