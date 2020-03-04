import React, {useEffect, useState} from 'react'
import styled from  'styled-components'

import ProjectCard from './ProjectGallery/ProjectCard'
import projectDetails from './projectDetails'

export default function ProjectsGallery() {
  
  const projects = projectDetails();
  
  const GalleryWrapper = styled.div`
    overflow: hidden;
    padding-top: 15px;
    min-height: 95vh;
    display: grid;
    grid-template-columns: 0.15fr 6fr 3fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
    " bar cards cards cards cards cards cards . . ."
    " bar cards cards cards cards cards cards . . ."
    " bar cards cards cards cards cards cards . . .";
  `
  const GalleryVerticalBar = styled.div`
    width: 5px;
    background-color: #A4B494;
    margin-left: 10px;
    grid-area: bar; 
  `

  const CardsWrapper = styled.div`
    grid-area: cards;
  `
  
  return (
    <GalleryWrapper>
     <GalleryVerticalBar />
     <CardsWrapper>
        {projects.map(project => {
          return(
            <ProjectCard key={project.projectName} details={project}/>
          )
        })}
     </CardsWrapper>
    </GalleryWrapper>
  )
}
