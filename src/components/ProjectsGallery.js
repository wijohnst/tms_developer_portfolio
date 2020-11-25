import React, {useEffect, useState} from 'react'
import styled from  'styled-components'

import ProjectCard from './ProjectGallery/ProjectCard'
import projectDetails from './projectDetails'
import SortMenu from './ProjectGallery/SortMenu'

export default function ProjectsGallery() {
  
  const projects = projectDetails();

  const GalleryWrapper = styled.div`
    overflow: hidden;
    padding-top: 15px;
    min-height: 95vh;
    display: grid;
    grid-template-columns: 1.5% auto 45%;
    grid-template-rows: auto;
    grid-template-areas:
    "bar cards menu";
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

  const MenuWrapper = styled.div`
    align-self: center;
    grid-area: menu;
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
     {/* <MenuWrapper>
       <SortMenu detail={projects}/>
     </MenuWrapper> */}
    </GalleryWrapper>
  )
}
