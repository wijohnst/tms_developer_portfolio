import React, {useState, useEffect} from 'react'
import MenuItem from './MenuItem'

export default function SortMenu(projects) {

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    console.log(sortBy);
  }, [sortBy])

  const coreTech = projects.detail.map(project => {
    return(
      project.techSpecs.split(",")[0]
    )
  })
  
  function handleSortRequest(sortRequestValue){
    setSortBy(sortRequestValue)
  }
  const filteredTech = [...new Set(coreTech)];

  return (
   <div>
    {filteredTech.map(tech => {
     return(
       <MenuItem key={tech} text={tech} onRequest={handleSortRequest}/>
     )
   })}
   </div>
  )
}
