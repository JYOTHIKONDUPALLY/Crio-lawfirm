import {Card, CardMedia, CardContent, Typography, CardActions} from "@mui/material";
import styles from "./Card.module.css";

export default function BasicCard ({backgroundColor, media,heading}){
return(
    <Card className={styles.container} sx={{backgroundColor:{backgroundColor}}}>
        <CardMedia
        component="img"
        height="194"
        image={media}
        alt="Icon"
        sx={{width:"101px", height:"101px"}}
      />
       <CardContent>
<Typography sx={{fontSize:"24px", color:"white"}}>{heading}</Typography>
<Typography sx={{fontSize:"14px" , color:"white"}}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</Typography>
       </CardContent>
       <CardActions>
<button className={styles.btn}>Read More</button>
       </CardActions>
    </Card>
)
}
