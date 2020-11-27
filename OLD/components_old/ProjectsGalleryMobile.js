import React from 'react'
import styled from 'styled-components'
import IntroHorizontalBar from './Intro/IntroHorizontalBar'
import ProjectCard from './ProjectGallery/ProjectCard'
import projectDetails from './projectDetails'

export default function ProjectsGalleryMobile() {
  
  const MobileGalleryWrapper = styled.div`
    margin-top: 10px;
  `
  const projects = projectDetails();
  
  return (
    <MobileGalleryWrapper>
      <IntroHorizontalBar />
      {projects.map(project => {
          return(
            <ProjectCard key={project.projectName} details={project}/>
          )
        })}
    </MobileGalleryWrapper>
  )
}
