import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ViewContext } from '../../Store/ViewContext'

import Views from './Views'

export default function ViewController() {

    const { viewData } = useContext(ViewContext)
    const [ render, setRender ] = useState(Views(viewData.view))

    useEffect(() =>{
        if(viewData.view){
            setRender(Views(viewData.view))
        }
    },[viewData.view])

    return render;
    
}
