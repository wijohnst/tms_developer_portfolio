import { useState } from 'react';

export default function useIsActive(defaultArr){

    const [ activeArr, setActiveArr ] = useState(defaultArr);

    function updateActive(target){
        
        const updatedArr = activeArr.map((val,index) => {
            if(target === index && val !== true){ 
                return true;
            }else{
                return false;
            }
        })
        setActiveArr(updatedArr);
    }

    return [activeArr, updateActive];
}