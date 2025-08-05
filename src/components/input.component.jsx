let InputComponent=({handleChange})=>{
    return (<>
    <input onKeyDown={(event)=>handleChange(event)} type="text" placeholder="enter name and press enter key  " />
    </>);
}
export default InputComponent;