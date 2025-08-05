import InputComponent from "./input.component";
import { OneItem } from "./oneitem";
export function ItemList({items,handleDelete,handleChange}){
   
    return (
        <>
        <InputComponent handleChange={handleChange} />     
        <ul>
        {
          items.map((item)=><OneItem handleDelete={handleDelete} key={item} item={item} />)
        }
        </ul>
     
        </>
    );
}