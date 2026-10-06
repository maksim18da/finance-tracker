const Header = (props) =>{
    const{
        balance,
    } = props
    return(
        <div className="tracker">
            <span className="tracker_title">Трекер личных финансов</span>
            <div className="monthly_balance">
                <span className="title_balance">Баланс за месяц</span>
                <span className="total_price">{balance} ₽</span>
            </div>
        </div>
    )
}
export default Header