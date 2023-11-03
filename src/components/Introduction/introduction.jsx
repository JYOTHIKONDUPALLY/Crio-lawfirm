import styles from "./introduction.module.css"; 
import BasicCard from "../Card/Card";
import Icon from "../../assests/giftIcon.png";

export default function Introduction (){
    const heading=["98% Success Rate","100% Success Rate","100% Success Rate"];
    const media=Icon;
    const backgroundColor=["#1D1D1D", "#2E2E2E", "#1D1D1D"];
const card=[0,1,2];
    return(
        <div>
        <div className={styles.container}>
            <div className={styles.heading}>
            Let’s Introduce
Ourself
            </div>
            <div className={styles.line}></div>
            <div className={styles.description}>
<h1>Criminal Lawyer</h1>
<br></br>
<p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
            </div>

        </div>
        <div className="">
            <h1 className={styles.heading} >Why Choose us?</h1>
            <div className={styles.card}>  
                {card.map(index=>    {return <BasicCard backgroundColor={backgroundColor[index]} media={media} heading={heading[index]}/>})}
            </div>
        </div>
        </div>
    )
}