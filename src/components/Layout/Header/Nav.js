import React, { useContext } from 'react'
import styled from 'styled-components'

import { ViewContext } from '../../../Store/ViewContext'

import useDevStyle from '../../../Utilities/Hooks/useDevStyle'
import useMedia from '../../../Utilities/Hooks/useMedia'
import getDevice from '../../../Utilities/getDevice'

const ComponentWrapper = styled.section`
    flex-grow: 1;
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent};
    align-items: center;
`
const Options = styled.section`
    display: flex;
    flex-direction: ${({flexDir}) => flexDir};
    justify-content: ${({justifyContent}) => justifyContent};
    align-items: center;
    margin: .5rem;
    margin-right: 1rem;
    padding: .25rem;
`
const Option = styled.span`
    font-size: ${({fontSize}) => fontSize};
    color: ${({color}) => color};
    margin: .5rem;
    &:hover{
        cursor: pointer;
    }
    transition: ${({transition}) => transition};
`

export default function Nav() {

    const { viewData ,setViewData } = useContext(ViewContext);

    const wrapperStyle = useDevStyle(viewData.isDev, "dashed","green");
    const optStyle = useDevStyle(viewData.isDev,"dotted thin","blue");
    
    const options = ['Home','Components','Projects'];

    const isMobile = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,false,true],
        false
    )
    const isTablet = useMedia(
        [getDevice('browser'),getDevice('tablet'),getDevice('mobile')],
        [false,true,false],
        false
    )

    return (
        <ComponentWrapper 
            style={wrapperStyle} 
            justifyContent={(isMobile || isTablet ? "center" : "flex-end")}
        >
            <Options 
                style={optStyle} 
                flexDir={(isTablet ? "column" : "row")}
                justifyContent={(isTablet ? "center" : "flex-end")}
            >
                {options.map((option,index) => {
                    const { view } = viewData;
                    const isActive = () => {
                        if(view === option){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    return (
                        <Option 
                            key={`NavOption-${index}`}
                            role="button"
                            onClick={() => setViewData({view : option})}
                            color={isActive() ? "white" : () =>{
                                if(viewData.isDev){
                                    return "white"
                                }else{
                                    return "#808080"
                                }
                            }}
                            fontSize={isActive() ? "1.25rem" : "1rem"}
                            transition={isMobile ? "none" : "font-size .4s"}
                        >
                            {isActive() ? option.toUpperCase() : option.toLowerCase()}
                        </Option>
                    )
                }
                )}
            </Options>
        </ComponentWrapper>
    )
}
