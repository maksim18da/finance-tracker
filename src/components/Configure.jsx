import { useState } from "react"

const Configure = (props) => {
    const {
        id,
        total,
        resetEditingCategoryId,
        newTotalLimit,
    } = props
    const [draft, setDraft] = useState(total)
    const handleSave = () => {
        const value = Number(draft)
        if (value !== 0) {
            newTotalLimit(id, value)
        } else {
            resetEditingCategoryId()
        }
    }

    const handleCancel = () => {
        resetEditingCategoryId()
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSave()
        if (e.key === "Escape") handleCancel()
    }

    return (
        <div className="configure-block" id={id}>
            <input
                type="number"
                className="input-number-value"
                placeholder="Лимит"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
            />
            <button className="save" onClick={handleSave}>Сохранить</button>
            <button className="cancel" onClick={handleCancel}>Отмена</button>
        </div>
    )
}

export default Configure