import styles from "./subscribe.module.css";
export default function Subscribe(){
    return (
        <div className={styles.Subscribe}>
            <h1 className={styles.heading}>Subscribe Our Newsletter</h1>
            <div className={styles.container}>
            <input type="text" placeholder="Name" className={styles.input}/>
            <input type="text" placeholder="Enter your Email" className={styles.input}/>
                <button className={styles.btn}>SEND</button>
            </div>
        </div>
    )
}