import React from 'react'
import styled from 'styled-components'

import IntroHeading from './Intro/IntroHeading'

export default function Intro() {
  
  const IntroWrapper = styled.div`
    /* background-color: lightslategray; */
    min-height: 50vh;
  `
  return (
    <IntroWrapper>
      <IntroHeading />
    </IntroWrapper>
  )
}
