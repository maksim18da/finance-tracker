import NewTransaction from "./NewTransaction"
import TransactionHistory from "./TransactionHistory"

const Interface = (props) =>{
    const{
        types,
        categories,
        addOperation,
        operations,
        removeOperation,
    } = props
    return(
        <div className="transactions">
            <NewTransaction addOperation = {addOperation} types = {types} categories ={categories}/>
            <div className="OperationsInfo">
                <span className="transactionTitle">Операции</span>
                <TransactionHistory  operations = {operations} removeOperation = {removeOperation}/>
            </div>
        </div>
    )
}
export default Interface