import React from 'react'

import Start from './Start'
import Next from './Next'

export default function Views(target){

    const Views = {
        "Start" : <Start />,
        "Next" : <Next />
    }

    return Views[target];
}