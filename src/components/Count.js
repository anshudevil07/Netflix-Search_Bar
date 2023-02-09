import React,{useState,useEffect} from 'react'

function Count() {
const [ount,setount]=useState(0);

useEffect(() => {
  
    console.log("udhfdsuifh");
  
}, [ount])


  return (
    <>
    <p>{ount}</p>
    <button onClick={()=>setount(ount+1)}>click</button>
    </>
  )
}

export default Count