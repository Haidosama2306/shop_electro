import  './styles.css'

function HotDeal() {
    
    return (
        <div className="section">
            <div className="hot_deal">
                <ul className="hot_deal_countdown">
                    <li>
                        <div>
                            <h3>00</h3>
                            <span>Days</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>00</h3>
                            <span>Hours</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>00</h3>
                            <span>Mins</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3 >00</h3>
                            <span>Secs</span>
                        </div>
                    </li>
                </ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>New Collections Up to 50% OFF</p>
                <a href="#" className="primary-btn cta_btn">Shop now</a>
            </div>
        </div>
    )
}
export default HotDeal