import React from 'react'
import styled from 'styled-components'

import IntroHorizontalBar from './IntroHorizontalBar'
import JobAboutCard from './JobAboutCard'

export default function IntroHeading() {
  
  const HeadingWrapper = styled.div`
    font-family: 'Alfa Slab One', 'Serif';
    margin-left: 15px;
    position: relative;
    top: 50%;
  `
  const NameWrapper = styled.div`
    /* line-height: 2px; */
    font-size : 2.5em;
    letter-spacing: 1.5px;
  `
  return (
    <HeadingWrapper>
      <NameWrapper> Will Johnston </NameWrapper>
      <IntroHorizontalBar />
      <JobAboutCard />
    </HeadingWrapper>
  )
}




