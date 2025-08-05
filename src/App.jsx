import { useState } from "react";
import { ItemList } from "./components/itemlist"

function App() {
  const [furits,updateFruit] =useState(['Apple','Mango','Banana','Orange','Grapes','NewFruit']);

  let deleteFruit =(item)=>{
      let newarray = furits.filter(p=>p!=item);
      updateFruit(newarray);
  };

  let addItem=(event)=>{
     
      if(event.key=="Enter")
      {
         let val=event.target.value;
      //   console.log(val);
        //    updateFruit([]); //overwrite old vlaue new

         event.target.value="";

       // let newarray =[...furits,val];
      //  updateFruit(newarray);
         updateFruit((old)=>[...old,val]);
      }
  }
  return (
    <>
    <h2> Fruit List</h2>
     <ItemList handleChange={addItem} items={furits} handleDelete={deleteFruit} />
    </>
  )
}

export default App
