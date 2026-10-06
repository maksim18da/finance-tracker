import Configure from "./Configure"
import ConfigureButton from "./ConfigureButton"

const Category = (props) => {
    const {
        categories,
        onConfigure,
        editingCategoryId,
        resetEditingCategoryId,
        newTotalLimit,
    } = props

    return (
        <>
            {categories.map((elem) => (
                <div className="category" key={elem.id}>
                    <div className="name_money">
                        <span className="food_name">{elem.name}</span>
                        {elem.id === editingCategoryId ? (
                            <Configure
                                id={elem.id}
                                total={elem.total}
                                newTotalLimit={newTotalLimit}
                                resetEditingCategoryId={resetEditingCategoryId}
                            />
                        ) : (
                            <div className="money-configure">
                                <span className="money_info">
                                    {elem.spent} ₽ / {elem.total} ₽
                                </span>
                                <ConfigureButton onConfigure={() => onConfigure(elem.id)} />
                            </div>
                        )}
                    </div>
                    <progress
                        value={elem.spent}
                        max={elem.total}
                        className={`progress-bar ${elem.category}`}
                    />
                </div>
            ))}
        </>
    )
}

export default Category