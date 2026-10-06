const ConfigureButton = (props) =>{
    const{
        onConfigure,
    } = props
    return(
        <button className="configure-btn" onClick={onConfigure}>✎</button>
    )
}
export default ConfigureButton
