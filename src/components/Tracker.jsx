import { useCallback, useEffect, useState } from "react"
import CardsInfo from "./CardsInfo"
import Header from "./Header"
import Limits from "./Limits"
import Interface from "./Interface"
import useLocalState from "./useLocalState"

const Tracker = () => {

    const [operations, setOperations] = useLocalState("tracker:operations", [])

    const [categories, setCategories] = useLocalState("tracker:categories", [
        { id: 1, name: "Еда",         category: "food",          total: 15000 },
        { id: 2, name: "Транспорт",   category: "transport",     total: 5000  },
        { id: 3, name: "Развлечения", category: "entertainment", total: 8000  },
        { id: 4, name: "Здоровье",    category: "health",        total: 6000  },
    ])

    const sumBy = (operations, predicate) => {
        return operations.reduce((sum, operation) => {
            if (predicate(operation)) {
                return sum + Number(operation.total)
            }
            return sum
        }, 0)
    }

    const allAmountIncome   = sumBy(operations, (op) => op.type === "income")
    const allAmountExpenses = sumBy(operations, (op) => op.type === "expenses")
    const operationsCount   = operations.length
    const balance           = allAmountIncome - allAmountExpenses

    const allInfo = [
        { id: 1, type: "income",     title: "Доходы",   total: allAmountIncome },
        { id: 2, type: "expenses",   title: "Расходы",  total: allAmountExpenses },
        { id: 3, type: "operations", title: "Операции", total: operationsCount },
    ]

    const categoriesWithSpent = categories.map((cat) => ({
        ...cat,
        spent: sumBy(
            operations,
            (op) => op.type === "expenses" && op.category === cat.category
        ),
    }))

    const transaction_types = [
        { value: "expenses", label: "Расход" },
        { value: "income",   label: "Доход"  },
    ]

    const addOperation = (operation) => {
        setOperations((prev) => [...prev, operation])
    }

    const removeOperation = (id) =>{
        setOperations(operations.filter((elem)=> elem.id !== id))
    }

    const [editingCategoryId, setEditingCategoryId] = useState(null)

    const onConfigure = useCallback((id) => {
        setEditingCategoryId(id)
    }, [])

    const resetEditingCategoryId = useCallback(() => {
        setEditingCategoryId(null)
    }, [])

    const newTotalLimit = useCallback((id, value) => {
        setCategories((prev) =>
            prev.map((elem) =>
                elem.id === id ? { ...elem, total: value } : elem
            )
        )
        setEditingCategoryId(null)
    }, [setCategories])


    useEffect(() => {
        const now = new Date()
        const month = String(now.getMonth() + 1).padStart(2, "0")
        const currentMonth = `${now.getFullYear()}-${month}`
        const lastMonth = localStorage.getItem("lastMonth")

        if (lastMonth === null) {
            localStorage.setItem("lastMonth", currentMonth)
            return
        }
        if (lastMonth !== currentMonth) {
            setOperations([])
            localStorage.setItem("lastMonth", currentMonth)
        }
    }, [])
    return (
        <>
            <Header balance={balance} />
            <CardsInfo allInfo={allInfo} />
            <div className="limits_operations">
                <Limits
                    categories={categoriesWithSpent}
                    onConfigure={onConfigure}
                    editingCategoryId={editingCategoryId}
                    resetEditingCategoryId={resetEditingCategoryId}
                    newTotalLimit={newTotalLimit}
                />
                <Interface
                    types={transaction_types}
                    categories={categories}
                    addOperation={addOperation}
                    operations={operations}
                    removeOperation = {removeOperation}
                />
            </div>
        </>
    )
}

export default Tracker