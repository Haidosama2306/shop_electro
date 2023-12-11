import styles from './styles.module.css'
import { useEffect, useState } from 'react'

function HotDeal() {
    const [secs, setSecs] = useState(59000);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecs(secs - 1000);
          // Cập nhật thời gian đếm ngược ra màn hình
          const secCDown = secs / 1000;
          document.querySelector('.secs').textContent = `${secCDown}`;
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className={styles.section} id={styles.hot_deal}>
            <div className={styles.hot_deal}>
                <ul className={styles.hot_deal_countdown}>
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
                            <h3 className='secs'></h3>
                            <span>Secs</span>
                        </div>
                    </li>
                </ul>
                <h2 className="text-uppercase">hot deal this week</h2>
                <p>New Collections Up to 50% OFF</p>
                <a href="#" className={`primary-btn + ${styles.cta_btn}`}>Shop now</a>
            </div>
        </div>
    )
}
export default HotDeal