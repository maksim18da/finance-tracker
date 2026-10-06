const CardsInfo = (props)=>{
    const {allInfo} = props
    return(
        <div className="cardsInfo">
            {allInfo.map(info =>(
                <div className="card">
                    <span className="title">{info.title}</span>
                    {info.type == 'income' && <span className={`total ${info.type}`}>{info.total} ₽</span>}
                    {info.type == 'expenses' && <span className={`total ${info.type}`}>{info.total} ₽</span>}
                    {info.type == 'operations' && <span className={`total ${info.type}`}>{info.total}</span>}
                </div>
            ))}
        </div>
    )
}
export default CardsInfo