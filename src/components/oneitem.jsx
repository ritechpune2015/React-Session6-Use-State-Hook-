export function OneItem({item,handleDelete})
{
    return(
         <li> {item} &nbsp;  <input type="button" value="Delete" onClick={()=>handleDelete(item)} /></li>
    );
}