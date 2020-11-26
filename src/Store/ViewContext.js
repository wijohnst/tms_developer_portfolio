import React, { useReducer } from 'react';

let reducer = (viewData, newViewData) =>{
    // if(newGoalData === null){
    //     localStorage.removeItem('goalData');
    //     return initialState
    // }
    return {...viewData, ...newViewData}
}

const initialState = {
    view : 'Start'
}

const ViewContext = React.createContext();

function ViewProvider(props){
    
    // const localState = JSON.parse(localStorage.getItem('viewData'))
    const [viewData, setViewData] = useReducer(reducer, initialState);

    // const [ viewData, setViewData ] = useState('Start')
    
    // useEffect(() => {
    //     localStorage.setItem("goalData", JSON.stringify(goalData))
    // }, [goalData])

    return(
        <ViewContext.Provider value={{viewData, setViewData}}>
            {props.children}
        </ViewContext.Provider>
    )
}

export {ViewContext, ViewProvider}