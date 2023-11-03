import styles from "./Footer.module.css";
import Logo from "../../assests/Group 10386.png";
import Icon1 from "../../assests/Icon.png";
import Icon2 from "../../assests/Icon (1).png";
import Icon3 from "../../assests/Icon (2).png";
import Icon4 from "../../assests/Icon (3).png";

export default function Footer (){
    return (
        <div className={styles.container}>
            <div className="logo">
        <img className={styles.image} src={Logo}alt="Logo" />
        </div>
        <div className={styles.Footer} >
          <div className={styles.box}>
          <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Attorneys</li>
        <li className={styles.item}>Practice Area</li>
        <li className={styles.item}>About us</li>
      </ul>

      <div className={styles.icons}>
<img src={Icon1} alt="img"  className={styles.iconstyle}/>
<img src={Icon2} alt="img"  className={styles.iconstyle} />
<img src={Icon3} alt="img"  className={styles.iconstyle}/>
<img src={Icon4} alt="img"  className={styles.iconstyle}/>
      </div>
          </div>
    
        <div className={styles.copyrightText}>
<p className={styles.text}>© 2020 Acme. All right reserved.</p>
<p className={styles.text}>Privacy Policy</p>
<p className={styles.text}>Terms of Service</p>
</div>
</div>
        </div>
    )
}