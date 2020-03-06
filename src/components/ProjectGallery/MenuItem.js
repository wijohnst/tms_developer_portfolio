import React from 'react'
import styled from 'styled-components'

export default function MenuItem(props) {
  
  const menuText = props.text;
  
  const SortButton = styled.button`
    background: none;
    border: none;
    color: #43565D;
    font-size: 2em;
    &:hover{
      cursor: pointer;
      color: #EADEDA;
    }
  `
  function sortProjectCards(e){
    props.onRequest(e.target.value);
  }
  
  return (
    // <MenuItemWrapper onClick={sortProjectCards}>
    //   {menuText}
    // </MenuItemWrapper>
    <SortButton value={menuText} onClick={sortProjectCards}>
      {menuText}
    </SortButton>
  )
}
