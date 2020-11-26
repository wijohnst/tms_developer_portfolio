import React from 'react'
import styled from 'styled-components'

import IntroHeading from './Intro/IntroHeading'

const IntroWrapper = styled.div`
min-height : ${({minHeight}) => minHeight};
`
export default function Intro({isMobile}) {
  
  return (
    <IntroWrapper minHeight={(isMobile ? '0vh' : '50vh')}>
      <IntroHeading />
    </IntroWrapper>
  )
}
