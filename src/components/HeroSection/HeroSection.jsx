import styles from "./HeroSection.module.css";
import personImage from "../../assests/person-img.png"

export default function Herosection() {
  return (
    <div className={styles.hero}>
      <div>
      <div className={styles.highlight}>
        You don’t have to Fight them Alone.
      </div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
        hac massa gravida arcu interdum proin curae.
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.email}
          placeholder="Enter your email address"
        />
        <button className={styles.btn}>let's talk</button>
      </div>
      <div className={styles.image}>

      </div>
      </div>
      <div className={styles.image}>
        <img src={personImage} alt="imageOfPerson" />
      </div>
     
    </div>
  );
}
