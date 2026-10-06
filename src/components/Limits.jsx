import Category from "./Category"

const Limits = (props)=>{
    const {
        categories,
        onConfigure,
        editingCategoryId,
        resetEditingCategoryId,
        newTotalLimit,
    } = props
    return(
        <div className="limits">
            <span className="title_limits">Лимиты по категориям</span>
            <Category
                categories = {categories}
                onConfigure = {onConfigure}
                editingCategoryId = {editingCategoryId}
                resetEditingCategoryId ={resetEditingCategoryId}
                newTotalLimit = {newTotalLimit}
            ></Category>
        </div>
    )
}
export default Limits