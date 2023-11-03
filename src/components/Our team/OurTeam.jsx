import styles from "./OurTeam.module.css";
import {Grid, Card, CardMedia, CardContent, Typography} from "@mui/material";
import avatar1 from "../../assests/Ellipse 15.png";
import avatar2 from "../../assests/Ellipse 15 (1).png";
import avatar3 from "../../assests/Ellipse 15 (2).png";
import avatar4 from "../../assests/Ellipse 15 (3).png";
import avatar5 from "../../assests/Ellipse 15 (4).png";
import avatar6 from "../../assests/Ellipse 16.png";

export default function OurTeam(){
    const data={
        image:[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6],
        name:["Danial Def","Sanfole","Cesforila","Colleen","Haldone","Nik Jeo"],
        cases:["301 Cases","850 Cases","470 Cases","180 Cases","212 Cases","350 Cases"]
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Our Team</h1>
            <Grid container spacing={3} sx={{marginTop:"50px"}}>
            {data.name.map((name, index) => (
          <Grid item key={name} xs={4}>
            <Card className={styles.card} sx={{backgroundColor:"#111111"}}>
              <CardMedia component="img" image={data.image[index]} sx={{width:"68px", height:"68px" }}alt="avatar" />
              <CardContent>
                <Typography className={styles.name}>{name}</Typography>
                <Typography className={styles.cases}>{data.cases[index]}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
            </Grid>
        </div>
    )
}