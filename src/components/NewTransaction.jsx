import { useState } from "react"
import AddButton from "./AddButton"

const NewTransaction =  (props) =>{
    const{
        types,
        categories,
        addOperation,
    } = props

    const [type, setType] = useState("expenses")
    const [category, setCategory] = useState("food")
    const [amount, setAmount] = useState("")
    const [comment, setComment] = useState("")

    const day = (new Date()).getDate()
    const month = (new Date()).getMonth()

    const addTransaction = (e)=>{
        e.preventDefault()
        const opeartion = {
            id: crypto.randomUUID(),
            title: comment,
            date: `${day}.${month+1}`,
            type: type,
            category: type == 'income' ? 'Доход' : category,
            total: amount,
        }
        addOperation(opeartion)
        setType("expenses")
        setCategory("food")
        setAmount('')
        setComment('')
    }
    return(
        <form className="newTransaction" onSubmit={e=>addTransaction(e)}>
            <span className="transactionTitle">Новая операция</span>
            <div className="interface">
                <select name="type" id="type" value={type} onChange={e=>setType(e.target.value)}>
                    {types.map((elem)=><option value={elem.value}>{elem.label}</option>)}
                </select>
                <select name="category" id="category" value={category} onChange={e=>setCategory(e.target.value)}>
                    {categories.map((elem)=><option value={elem.category}>{elem.name}</option>)}
                </select>
                <input type="number" placeholder="Сумма" className="amount" value={amount} required onChange={e=>setAmount(e.target.value)}/>
                <input type="text" placeholder="Комментарий" value={comment} required onChange={e=>setComment(e.target.value)}/>
                <AddButton>Добавить</AddButton>
            </div>
        </form>
    )
}
export default NewTransaction