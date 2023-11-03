import styles from "./Faq.module.css";
import { Accordion, AccordionSummary, AccordionDetails, Typography,Icon, StyledEngineProvider } from "@mui/material";
import {ReactComponent as AddIcon} from "../../assests/Group 10464.svg";
export default function Faq (){
    const question=["Do I need a personal injury report?", "How much is my case worth?","What should I do right after car accidect","How much is my case worth?"]
    return(
        <div className={styles.Faq}>
            <div>
<h1 className={styles.heading}>FAQ</h1>
<p className={styles.description}>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </p>
            </div>
            <div className={styles.question}>
                {question.map((option)=>{
                    return <div>
                    <Accordion sx={{background:"#111111", color:"white"}}>
                    <AccordionSummary expandIcon={<AddIcon/>}>
                    <Typography className={styles.title}>{option}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.description}>Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequatduis
                enim velit mollit Exer. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                })}
            </div>
        </div>
    )
}