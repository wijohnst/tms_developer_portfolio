import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Intro from './components/Intro'
import ProjectsGalleryMobile from './components/ProjectsGalleryMobile'
import ProjectsGallery from './components/ProjectsGallery'

export default function App() {
  
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if(innerWidth < 500){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
  }, [innerWidth]);

  const AppGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
  `

  const IntroWrapper = styled.div`
    max-height: 50vh;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    " . "
    " intro ";
  `
  const ProjectsGalleryWrapper = styled.div`
  `
  const AppFlex = styled.div`
    /* background-color: lightgreen; */
    display: flex;
    flex-direction: column;
  `
 if(isMobile === true){
  return(
      <AppFlex>
        <Intro />
        <ProjectsGalleryMobile />
      </AppFlex>
    )
 }else{
   return(
     <AppGrid>
       <IntroWrapper>
          <Intro />
       </IntroWrapper>
       <ProjectsGalleryWrapper>
         <ProjectsGallery />
       </ProjectsGalleryWrapper>
     </AppGrid>
   )
 }
  
}
