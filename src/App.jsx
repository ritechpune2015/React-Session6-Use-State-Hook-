import { useState } from 'react';
import './App.css'

function App() {
   
  const [cnt,updateCnt] =useState(10);

   let handleClick=()=>{
     //cnt=cnt+1;
     //console.log(cnt);
     updateCnt((val)=>val+1);
   }
  return (
    <>
       Count : {cnt}
       <br />
       <input type="button" value="Increment" onClick={handleClick} />
    </>
  )
}

export default App
