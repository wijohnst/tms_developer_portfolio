import { useState } from 'react'

export default function useDevStyle(isDev,style,color){

    if(isDev){
        return {
            border : `${style} ${color}`
        }
    }else{
        return null
    }

}