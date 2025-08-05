import { useState } from 'react';

function Count() {
   
  const [ecnt,updateeCnt] =useState(0);
  const [ocnt,updateoCnt] =useState(1);

   let handleClick=()=>{
     updateeCnt((val)=>val+2);
     updateoCnt((val)=>val+2);
   }
  return (
    <>
       Even Count : {ecnt}
       <br />
       Odd Count : {ocnt} <br/>
       <input type="button" value="Increment" onClick={handleClick} />
    </>
  )
}

export default Count
