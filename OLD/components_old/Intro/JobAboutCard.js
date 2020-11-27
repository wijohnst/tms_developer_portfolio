import React from 'react'
import styled from 'styled-components'

export default function JobAboutCard() {

  const JobAboutCardWrapper = styled.div`
    /* background-color : lightpink; */
    font-family : 'Spartan', 'sans-sarif';
    font-size : 1.5em;
    background-color: #8896AB;
    padding: 10px;
    padding-right: 75px;
    text-align: right;
    border-radius: 5px 5px 5px 5px; 
  `
  return (
    <JobAboutCardWrapper>
      <span>Full Stack Javascript Developer</span>
    </JobAboutCardWrapper>
  )
}
