import styles from "./Header.module.css";
// import Logo from "../../assests/Group 10386.png";
import {ReactComponent as Logo} from "../../assests/Group 10386 (1).svg";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className="logo">
        {/* <img className={styles.image} src={Logo} alt="Logo" /> */}
        <Logo />
        </div>

      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Attorneys</li>
        <li className={styles.item}>Practice Area</li>
        <li className={styles.item}>About us</li>
      </ul>

      <div>
        <button className={styles.btn}>Contact us </button>
      </div>
    </div>
  );
}
