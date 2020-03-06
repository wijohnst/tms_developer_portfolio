import React from 'react'
import styled from 'styled-components'

export default function ProjectCard(details) {
  
  const ProjectCardWrapper = styled.div`
    background-color: #43565D;
    border-radius: 5px 5px 5px 5px;
    width: 90%;
    margin: 10px;
    min-height: 15%;
    position: relative;
    box-shadow: 5px 5px 15px black;
  `
  const ProjectName = styled.h3`
    font-family: 'Alfa Slab One', serif ;
    color: #EADEDA;
    letter-spacing: 1.5px;
    padding: 5px 5px 0px 5px;
    text-align: right;
    &:hover{
      cursor: pointer;
    }
  `
  const HorizontalBar = styled.hr`
    border: none;
    background-color: #A4B494;
    height: 2px;
  `
  const ProjectTechSpecs = styled.div`
    text-align: right;
    padding-right: 10px;
  `
  const ProjectDescription = styled.h2`
    padding: 10px;
  `
  const ProjectIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
  `
  function handleClick(){
    window.open(details.details.url);
  }
  return (
    <ProjectCardWrapper>
      <ProjectName onClick={handleClick}>
        {details.details.projectName}
      </ProjectName>
      <HorizontalBar />
      <ProjectTechSpecs>
        {details.details.techSpecs}
      </ProjectTechSpecs>
      <ProjectDescription>
        {details.details.projectDescription}
      </ProjectDescription>
      <ProjectIconWrapper>
        <img src={details.details.icon} alt={details.details.alt}/>
      </ProjectIconWrapper>
    </ProjectCardWrapper>
  )
}
