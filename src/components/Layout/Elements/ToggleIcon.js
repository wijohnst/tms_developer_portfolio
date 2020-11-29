import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'

const ComponentWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({backgroundColor}) => backgroundColor};
    clip-path : ${({clipPath}) => clipPath};
    min-height: 100pt;
    min-width: 6.85rem;
    height: ${({height}) => height};
    width: ${({height}) => height};
    color: ${({color}) => color};
`

export default function ToggleIcon(props){

    const { 
        icon,
        iconSize,
        isActive,
        colors,
        clipPath,
        parent,
        sizeDivisor 
    } = props;

    const { viewData } = useContext(ViewContext);

    const compStyle = useDevStyle(viewData.isDev,"dotted thin", "blue");

    const [containerHeight, setContainerHeight] = useState('0pt');

    useEffect(() =>{
        if(parent && parent.current.getBoundingClientRect().height >= 100 && parent.current.getBoundingClientRect().width >= 200){
            setContainerHeight(parent.current.getBoundingClientRect().height * sizeDivisor);            
        }else{
            console.log("ERROR: Parent is too small to display <CircleImage />.")
        }
    },[parent])

        return(
        <ComponentWrapper 
            style={compStyle}
            backgroundColor={(isActive ? colors.active : colors.inactive)}
            clipPath={(viewData.isDev ? "none" : clipPath)}
            height={containerHeight}
            width={containerHeight}
            color={(viewData.isDev ? "black" : null)}
        >
            {viewData.isDev ? <span>ICON</span> : 
            <FontAwesomeIcon 
                icon={icon} 
                color={(isActive ? colors.inactive : colors.active)}
                size={iconSize}
            />} 
        </ComponentWrapper>
        )
}
