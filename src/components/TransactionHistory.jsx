const TransactionHistory = (props) =>{
    const{
        operations,
        removeOperation,
    } = props
    return(
        <div className="allTransactions">
            {operations.map((operation)=>(
                <div className="transactionInfo">
                    <div className="name-date">
                        <span className="transactionName">{operation.title}</span>
                        <span className="transactionDate">{operation.date}</span>
                    </div>
                    <div className="category-spent">
                        <div className= {`category ${operation.category === 'Доход' ? 'income' : operation.category}`}>
                            {operation.category === 'food' && <span>Еда</span>}
                            {operation.category === 'transport' && <span>Транспорт</span>}
                            {operation.category === 'entertainment' && <span>Развлечения</span>}
                            {operation.category === 'health' && <span>Здоровье</span>}
                            {operation.category === 'Доход' && <span>Доход</span>}
                        </div>
                        {operation.type === 'income' ? <span className={`spent ${operation.type}`}> {operation.total} ₽</span> : <span className={`spent ${operation.type}`}>- {operation.total} ₽</span>}
                        <button className="close-btn" onClick={()=>removeOperation(operation.id)} title="Удалить">&#10006;</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TransactionHistory