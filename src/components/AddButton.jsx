const AddButton = (props)=>{
    const{
        children,
    } = props
    return(
        <button type="submit" className="addTransaction">{children}</button>
    )
}
export default AddButton