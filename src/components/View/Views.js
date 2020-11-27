import React from 'react'

import Home from '../Home/Home'
import ComponentGallery from '../ComponentGallery/ComponentGallery'
import Projects from '../Projects/Projects'

export default function Views(target){

    const Views = {
        Home: <Home />,
        Components : <ComponentGallery />,
        Projects : <Projects />
    }

    return Views[target];
}